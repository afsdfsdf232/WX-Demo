import ClassicModel  from './../../models/classic.js'
import LikeModel from './../../models/like.js'
let classic = new ClassicModel()
let likeModel = new LikeModel()
Page({
  data: {
    requestData1: {},
    first: true,
    latest: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  //  var  _this = this //保存this的指向，回调函数中this指向null或者改写为箭头函数
  //   wx.request({
  //     url:'http://bl.7yue.pro/v1/classic/latest',
  //     header: {
  //       appkey: "KOLDaSADSDLWWbG"
  //     },
  //     // success: function(res){
  //     //   _this.data.requestData1 = res.data
  //     //   console.log()
  //     // }
  //     success: (res) => {
  //       this.data.requestData1 = res.data
  //     }
  //   })
    // http.request({
    //   url: '/classic/latest',
    //   success: (res) =>{

    //   }
    // })
    classic.getLatest((res)=>{
      this.setData({
        requestData1: res.data
      })
    })
  },
  onLink:function(event){
     //获取子组件传过来的behavior参数判断是点赞还是取消点赞
    let behavior = event.detail.behavior;
    likeModel.like(behavior, this.data.requestData1.id, this.data.requestData1.type)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },
  onLeft(){
    console.log('left')
  },
  onRight(){
    console.log('right')
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