const baseUrl="/";
export function baseRequest(url,methods,data){
  return new Promise ((reslove,reject)=>{
    wx.request({
      url: baseUrl+url,
      method:methods,
      data:data|| "",
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
         'token':wx.getStorageSync('token')                     
      },
      success(res){
        reslove(res)
      },
      fail(error){
        reject(error)
      }

    })
  })
}