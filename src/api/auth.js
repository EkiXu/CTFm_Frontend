import service from '@/utils/request'

// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /auth/obtainToken/ [post]
export const obtainTokenAPI = (data) => {
  return service({
    url: '/auth/obtainToken/',
    method: 'post',
    data: data
  })
}

// @Summary 用户Token更新
// @Produce  application/json
// @Param data body {refresh:"string"}
// @Router /auth/refreshToken/ [post]
export const refreshTokenAPI = (data) => {
  return service({
    url: '/auth/refreshToken/',
    method: 'post',
    data: data
  })
}

// @Summary 用户登出
// @Produce  application/json
// @Router /auth/logout/ [get]
export const logoutAPI = () => {
  return service({
    url: '/auth/logout/',
    method: 'get',
  })
}

// @Summary 用户自身状态查询
// @Produce  application/json
// @Router /auth/logout/ [get]
export const getStatusAPI = () => {
  return service({
    url: '/user/status',
    method: 'get',
  })
}

// @Summary 用户注册
// @Produce  application/json
// @Param data body {email:"string",username:"string",nickname:"string",password:"string"}
// @Router /auth/register/ [post]
export const registerAPI = (data) => {
  return service({
    url: '/auth/register/',
    method: 'post',
    data: data
  })
}
