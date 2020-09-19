// pages/detail/detail.js
import { getDetaileById } from '../../utils/api/pay'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {
      url: '../../utils/images/one.jpg',
      titie: '假日酒店加入酒店',
      conent: '宿适轻奢酒店(上海火车站店)位于地铁1号线汉中路站上盖，4号出口即是酒店，汇集地铁1号、12号、13号。'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      url: options.url
    })

    //发请求
    // getDetaileById().then((res)=>{

    // }).catch((error)=>{
    //   wx.showToast({
    //     title: '加载失败',
    //     icon: 'none',
    //     success(){
    //       wx.navigateBack({
    //         delta: 1
    //       })
    //     }

    //   })

    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})