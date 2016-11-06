//index.js
//获取应用实例


var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  bindDateChange: function(e) {
    var ymd = e.detail.value;
    var month = ymd.split("-")[1];
    if(month.indexOf("0") == 0) {
      month = month.substring(1,2);
    }
    this.setData({
      date: month
    })
  }
})