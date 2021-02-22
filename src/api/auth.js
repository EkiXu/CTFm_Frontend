import service from '@/utils/request'

// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /auth/obtainToken/ [post]
export const obtainTokenAPI = (data) => {
  return service({
    url: '/auth/obtain_token/',
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
    url: '/auth/refresh_token/',
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
// @Summary 确认邮件验证
// @Produce  application/json
// @Router /auth/activate/:user_id/:token/ [get]
export const activateAPI = (user_id,token) => {
  return service({
    url: '/auth/activate/'+user_id+'/'+token+'/',
    method: 'get',
  })
}

// @Summary 发送重置密码邮件
// @Produce  application/json
// @Router /auth/reset_password [post]
// @Param data body {email:"string"}
export const sendRestPasswordEmailAPI = (data) => {
  return service({
    url: '/auth/reset_password_email/',
    method: 'post',
    data: data,
  })
}

// @Summary 确认重置密码
// @Produce  application/json
// @Router /auth/logout/ [post]
// @Param data body {new_passowrd:"string"}
export const restPasswordAPI = (user_id,token,data) => {
  return service({
    url: '/auth/reset_password/'+user_id+'/'+token+'/',
    method: 'post',
    data: data,
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
