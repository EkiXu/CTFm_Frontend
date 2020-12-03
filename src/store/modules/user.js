import { obtainTokenAPI,refreshTokenAPI,logoutAPI } from '@/api/auth'
import router from '@/router/index'
import jwt_decode from 'jwt-decode'

export const user = {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    userInfo: {
      id:0,
      nickname: '',
      username: '',
    },
  },
  mutations: {
    updateTokens(state,tokens){
      localStorage.setItem('accessToken', tokens.access)
      //console.log(newAccessToken);
      state.accessToken = tokens.access
      localStorage.setItem('refreshToken', tokens.refresh)
      state.refreshToken = tokens.refresh
    },
    updateAccessToken(state, newAccessToken){
      localStorage.setItem('accessToken', newAccessToken)
      state.accessToken = newAccessToken
    },
    removeAccessToken(state){
      localStorage.removeItem('accessToken')
      state.accessToken = null
    },
    removeTokens(state){
      localStorage.removeItem('accessToken')
      state.accessToken = null
      localStorage.removeItem('refreshToken')
      state.refreshToken = null
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    resetUserInfo (state, userInfo = {}) {
      state.userInfo = {
        ...state.userInfo,
        ...userInfo
      }
    }
  },
  actions:{
    async ObtainToken ({ commit }, loginInfo) {
      const res = await obtainTokenAPI(loginInfo)
      if(res.status == 200){
        let tokens = {access:res.data.access,refresh:res.data.refresh}
        commit('updateTokens',tokens)
        const decoded = jwt_decode(res.data.access)
        let userInfo = {nickname:decoded.nickname,username:decoded.username,id:decoded.id}
        commit('setUserInfo',userInfo)
        const redirect = router.history.current.query.redirect
        if (redirect) {
          router.push({ path: redirect })
        } else {
          router.push({ path: '/categories' })
        }
      }
      return res
    },
    async RefreshToken({ commit },token){
      const res = await refreshTokenAPI({refresh:token})
      console.log(res)
      if(res.status == 200){
        commit('updateAccessToken',res.data.access)
      }
      return res
    },
    UpdateUserInfo({commit},userInfo){
      commit('resetUserInfo',userInfo)
    },
    /*
    async InspectToken(){
      const accessToken = this.state.accessToken;
      if(accessToken){
        const decoded = jwt_decode(accessToken);
        const exp = decoded.exp
        const orig_iat = decode.orig_iat
        if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
          this.dispatch('refreshToken')
        } else if (exp -(Date.now()/1000) < 1800){
          // DO NOTHING, DO NOT REFRESH          
        } else {
          commit('removeTokens')
          let userInfo = {nickname:null,username:null}
          commit('setUserInfo',userInfo)
          // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        }
      }
    },*/
    Logout({ commit }){
      commit('removeTokens')
      let userInfo = {nickname:null,username:null}
      commit('setUserInfo',userInfo)
      router.push({ path: '/login' })
    }
  },
  getters: {
    userInfo (state) {
      return state.userInfo
    },
    accessToken (state) {
      return state.accessToken
    },
    refreshToken (state) {
      return state.refreshToken
    },
  }
}
