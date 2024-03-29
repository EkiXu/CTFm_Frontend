import service from '@/utils/request'

// @Summary 获取比赛信息
// @Produce  application/json
// @Router /contest/ [post]
export const getContestInfoAPI = () => {
  return service({
    url: '/contest/',
    method: 'get',
  })
}

// @Summary 获取趋势
// @Produce  application/json
// @Router /contest/trend/ [get]
export const getTrendAPI = () => {
    return service({
      url: '/contest/trend/',
      method: 'get',
    })
  }

// @Summary 获取积分榜
// @Produce  application/json
// @Router /contest/scoreboard/ [get]
export const getScoreboardAPI = (offset,limit) => {
  return service({
    url: '/contest/scoreboard/',
    method: 'get',
    params:{
      "offset":offset,
      "limit":limit,
    }
  })
}

// @Summary 获取校内趋势
// @Produce  application/json
// @Router /contest/trend/ [get]
export const getStuTrendAPI = () => {
  return service({
    url: '/contest/trend/stu/',
    method: 'get',
  })
}

// @Summary 获取校内积分榜
// @Produce  application/json
// @Router /contest/scoreboard/ [get]
export const getStuScoreboardAPI = (offset,limit) => {
  return service({
    url: '/contest/scoreboard/stu/',
    method: 'get',
    params:{
      "offset":offset,
      "limit":limit,
    }
  })
}


// @Summary 获取队伍趋势
// @Produce  application/json
// @Router /contest/trend/ [get]
export const getTeamTrendAPI = () => {
  return service({
    url: '/contest/trend/team/',
    method: 'get',
  })
}


// @Summary 获取队伍积分榜
// @Produce  application/json
// @Router /contest/scoreboard/ [get]
export const getTeamScoreboardAPI = (offset,limit) => {
  return service({
    url: '/contest/scoreboard/team/',
    method: 'get',
    params:{
      "offset":offset,
      "limit":limit,
    }
  })
}