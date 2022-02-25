import service from '@/utils/request'

export const createTeamAPI = (data) => {
  return service({
    url: '/team/',
    method: 'post',
    data: data
  })
}

export const getTeamAPI = (id) => {
  return service({
    url: '/team/'+id+'/',
    method: 'get',
  })
}

export const joinTeamAPI = (data) => {
  return service({
    url:"/team/ticket/",
    method:"post",
    data:data,
  })
}

export const dismissTeamByIDAPI = (id) => {
  return service({
    url:"/team/"+id+"/",
    method:"delete",
  })
}