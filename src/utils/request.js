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

function direct404() {
  router.push({
      path: '/error/404',
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

function isRefreshTokenExpired() {
  const refreshToken = store.getters['user/refreshToken']
  const decoded = jwt_decode(refreshToken)
  const exp = decoded.exp
  if (exp) {
      let willExpired = exp - (Date.now()/1000) < 0
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
    if(config.url.startsWith('/auth') || config.url.startsWith('/contest')){
      return config
    }
    // 获取token
    const accessToken = store.getters['user/accessToken']
    // 如果token存在，首先校验是否已经过期，如果已经过期，跳转到登录页面
    if (accessToken) {
        const refreshToken = store.getters['user/refreshToken']
        if(isRefreshTokenExpired()){
          store.dispatch('user/ClearUserState')
        }else if (isTokenExpired()) {
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
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      Vue.$vToastify.error('Sorry Timeout!')
      const originalRequest = error.config
      return instance.request(originalRequest)
    }
    const errorInfo = error.response.data.detail
    Vue.$vToastify.error(`Error: ${errorInfo}`)
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
    if(error.toString().includes('timeout')) {
      error.message = 'Sorry Timeout!'
    }else if(error.response){
      if (error.response.data.detail) {
        error.message = error.response.data.detail
      }else {
        var message
        for (var key in error.response.data){
          message = key.toString()+error.response.data[key][0]
        }
        error.message = message
      }
      
      if(error.response.status == 401 || error.response.status == 403) {
        //error.message = error.response.detail
        //store.dispatch('user/ClearUserState')
        //directLogin() 
        //console.log(Vue.$router.path)
      }else if(error.response.status == 404){
        direct404()
        return 
      }
    }
    
    Vue.$vToastify.error(`Error: ${error.message}`)
    console.error(`Error： ${error}`)
    return Promise.reject(error)
  }
)

export default service
