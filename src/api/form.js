import request from '@/utils/request'

export function getChart(params) {
  return request({
    url: 'form/chart',
    method: 'get',
    params
  })
}
