import { getContestInfoAPI } from '@/api/contest'
import { getCategoryListAPI } from '@/api/challenge'

export const contest = {
  namespaced: true,
  state: {
    contestInfo: {
      name:'',
      start_time: '',
      end_time: '',
    },
    categorylist:[]
  },
  mutations: {
    setContestInfo (state, contestInfo) {
      state.contestInfo = contestInfo
    },
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
    }
  },
  actions:{
    async GetCategoryList ({ commit }) {
      const res = await getCategoryListAPI()
      categoryList = []
      if(res.status == 200){
        for(let rawCategory of res.data){
          categoryList.push({
            id: rawCategory.id,
            name: rawCategory.name,
            icon: rawCategory.icon,
          })
        }
        commit('setCategoryList',categoryList)
      }
      return res
    },
    SetCategoryList ({ commit }, data) {
      let categoryList = []
      for(let rawCategory of data){
        categoryList.push({
          id: rawCategory.id,
          name: rawCategory.name,
          icon: rawCategory.icon,
        })
      }
      commit('setCategoryList',categoryList)
      return data
    },
    async GetContestInfo ({ commit }) {
      const res = await getContestInfoAPI()
      if(res.status == 200){
        let contestInfo = {
          name:res.data.name,
          start_time: res.data.start_time,
          end_time: res.data.end_time,
          description: res.data.description
        }
        commit('setContestInfo',contestInfo)
      }
      return res
    },
  },
  getters: {
    contestInfo (state) {
      return state.contestInfo
    },
    categoryList (state) {
      return state.categoryList
    }
  }
}
