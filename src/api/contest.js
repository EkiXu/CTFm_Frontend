import service from '@/utils/request'

// @Summary 获取比赛信息
// @Produce  application/json
// @Router /contest/ [post]
export const getContestAPI = () => {
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

// @Summary 获取趋势
// @Produce  application/json
// @Router /contest/scoreboard/ [get]
export const getScoreboardAPI = () => {
  return service({
    url: '/contest/scoreboard/',
    method: 'get',
  })
}