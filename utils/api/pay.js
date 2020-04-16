import {baseRequest} from './network'

//向后端发送code
export function getOpenCode(code){

  return baseRequest({
      url:'',
      data:code,
      method:'POST'
  })
}

//根据id获取详情页数据
export function getDetaileById(data){
  return baseRequest({
    url:'',
    data:data,
    method:'POST'
})
}