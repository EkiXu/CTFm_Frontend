import service from '@/utils/request'

export const getUserListAPI = () => {
    return service({
      url: '/user/',
      method: 'get',
    })
  }
  
export const getUserDetailByIDAPI = (id) => {
  return service({
    url: '/user/'+id,
    method: 'get',
  })
}