import axios from 'axios'
import { store } from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import jwt_decode from 'jwt-decode'
import router from '../router'


const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
})


window.isRefreshing = false

function directLogin() {
  router.push({
      path: '/login',
      query: {
        redirect: router.currentRoute.fullPath
      }
  })
}

function isTokenExpired() {
  const accessToken = store.getters['user/accessToken']
  const decoded = jwt_decode(accessToken)
  const exp = decoded.exp
  if (exp) {
      let willExpired = exp - (Date.now()/1000) < 60*30
      return willExpired
  }
  return false
}


// http request 拦截器
service.interceptors.request.use(
  config => {
    NProgress.start()
    if (!config.headers['Content-Type']) {
        config.headers = {
            'Content-Type': 'application/json'
        }
    }
    if(config.url.startsWith('/auth')){
      return config
    }
    // 获取token
    const accessToken = store.getters['user/accessToken']
    // 如果token存在，首先校验是否已经过期，如果已经过期，跳转到登录页面
    if (accessToken) {
        const refreshToken = store.getters['user/refreshToken']
        if (isTokenExpired()) {
          store.dispatch('user/RefreshToken',refreshToken)
        } else {
            config.headers.Authorization = `Bearer ${accessToken}`
            return config
        }
    } else {
      directLogin()
      Vue.$vToastify.error('Please Login First')
    }
    return config
  },
  error => {
    NProgress.done()
    //  1.判断请求超时
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      Vue.$vToastify.error('抱歉，请求超时!')
      // 重新请求一次
      const originalRequest = error.config
      return instance.request(originalRequest)
    }
    //  2.需要重定向到错误页面
    const errorInfo = error.response.data.detail
    Vue.$vToastify.error(`错误: ${errorInfo}`)
    console.log(errorInfo)
    if (errorInfo) {
      const errorStatus = errorInfo.status
      router.push({
        path: `/error/${errorStatus}`
      })
    }
    return Promise.reject(error) 
  }
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    NProgress.done()
    return response
  },
  error => {
    NProgress.done()
    console.log(error)
    if(error && error.response){
      if (error.response.status == 401 || error.response.status == 403) {
        error.message = '未登录'
        directLogin()
        Vue.$vToastify.error(`错误: ${error.message}`)
      }else if(error.response.status ==500 ){
        Vue.$vToastify.error(`服务器错误: ${error.message}`)
      }else if (error.response.data.detail) {
        error.message = error.response.data.detail
      }
      error.message = error.response.data
    } 
    if (error.toString().includes('timeout')) {
      error.message = '抱歉，服务器超时，请稍后再试！'
      Vue.$vToastify.error(`错误: ${error.message}`)
    }
    // 显示错误消息

    console.error(`错误消息： ${error}`)
    return Promise.reject(error)
  }
)

export default service
