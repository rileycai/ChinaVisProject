import request from '@/utils/request'

export function getList(id) {
  return request({
    url: '/',
    method: 'get',
    params: { id }
  })
}
