import service from '@/utils/request'

// @Summary 添加题目
// @Produce  application/json
// @Param data body {"name":"strings","description":"strings","category":"strings","points":500,"is_hidden":false}
// @Router /challenges [post]
export const getCategoryListAPI = () => {
  return service({
    url: '/category/',
    method: 'get',
  })
}

export const getChallengesListByCategoryIDAPI = (categoryID) => {
  return service({
    url: '/category/'+categoryID+"/challenge/",
    method: 'get',
  })
}

export const getChallengesListByCategoryNameAPI = (categoryName) => {
  return service({
    url: '/challenge/',
    params: {"categoryName":categoryName},
    method: 'get',
  })
}

export const getChallengeByIDAPI = (id) => {
  return service({
    url: '/challenge/'+id,
    method: 'get',
  })
}


export const checkChallengeFlagByIDAPI = (data,id) => {
  return service({
    url: '/challenge/'+id+'/_checkFlag/',
    method: 'post',
    data: data
  })
}