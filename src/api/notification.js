import service from '@/utils/request'

export const getNotificationListAPI = () => {
  return service({
    url: '/notification/',
    method: 'get',
  })
}