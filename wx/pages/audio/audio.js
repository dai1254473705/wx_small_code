Page({
  data:{},
  startRecord:function(e){
    wx.startRecord({
      success: function (res) {
        console.log(res);
        var tempFilePath = res.tempFilePath
        wx.playVoice({
          filePath: tempFilePath,
          complete: function () {
            wx.showToast({
              title: '播放完成',
              icon: 'success',
              mask: 'true',
              duration: 2000
            })
          }
        })
      },
      fail: function (res) {
        //录音失败
        wx.showToast({
          title: '录音失败',
          icon: 'success',
          mask: 'true',
          duration: 2000
        })
        wx.stopRecord()
      }
    })
  },
  endRecord:function(){
    wx.stopRecord()
  }
})