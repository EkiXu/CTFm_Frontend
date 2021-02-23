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
export const getScoreboardAPI = () => {
  return service({
    url: '/contest/scoreboard/',
    method: 'get',
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
export const getStuScoreboardAPI = () => {
  return service({
    url: '/contest/scoreboard/stu/',
    method: 'get',
  })
}