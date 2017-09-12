//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    "swiperImg":[
      { "name": "001", "src":"http://img1.imgtn.bdimg.com/it/u=3469073068,3426495253&fm=11&gp=0.jpg"},
      { "name": "002", "src":"http://img0.ph.126.net/eRv-A9o1L8v4MKZbiobhow==/6608664116770962144.jpg" },
      { "name": "003", "src": "http://img0.ph.126.net/XjXl3KcowmXdE1pcsFVe8g==/1067353111787095545.jpg" },
      { "name": "004", "src": "http://www.laozhq.cn/UploadFile/2013-2/20132274451175515.jpg" }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator_active_color:"#fff",
    date:"2017-03-01"
  },
  //事件处理函数
  bindViewTap: function() {
    console.log("点击头像");
    console.log(this.route);

    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindDateChange:function(e){
    console.log(e);
    this.setData({
      "date":e.detail.value
    })
  },
  onPullDownRefresh:function(){
    console.log("正在刷新");
    setTimeout(function(){
      console.log("刷新结束");
      wx.stopPullDownRefresh();
    },2000)
  },
  onReachBottom:function(){
    console.log("正在上拉刷新");
  },
  onPageScroll:function(e){
    this.setData({
      "position":e.scrollTop
    },function(){
      console.log("完成");
    });
  },
  onShareAppMessage:function(){
    return {
      "title":"测试分享",
      "path":'/pages/index/index'
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     var speed = res.speed
    //     var accuracy = res.accuracy
    //     console.log(res);
    //   }
    // })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
