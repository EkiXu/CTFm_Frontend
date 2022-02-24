import service from '@/utils/request'

export const getUserListAPI = () => {
  return service({
    url: '/user/',
    method: 'get',
  })
}
  
export const getUserDetailByIDAPI = (id) => {
  return service({
    url: '/user/'+id+'/',
    method: 'get',
  })
}

export const updateUserDetailByIDAPI = (id,data) => {
  return service({
    url: '/user/'+id+'/',
    method: 'put',
    data:data
  })
}

// @Summary 用户自身状态查询
// @Produce  application/json
// @Router /user/status/ [get]
export const getStatusAPI = () => {
  return service({
    url: '/user/status',
    method: 'get',
  })
}

// @Summary 发送验证邮件
// @Produce  application/json
// @Router /user/send_verify_email/ [post]
// @Param data body {email:"string"}
export const sendVerifyEmailAPI = (data) => {
  return service({
    url: '/user/send_verify_email/',
    method: 'post',
    data:data
  })
}
