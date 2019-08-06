// pages/detail/detail.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload() {
    // console.log('页面退出')
    // 1.获取首页的页面对象
    // getCurrentPages获取当前所有(活跃)栈的页面
    const pages = getCurrentPages();
    const home = pages[pages.length-2];

    // 2.调用页面对象的方法
    home.setData({
      title: '呵呵呵呵'
    })
  },
  handleBackHome:function () {
    wx.navigateBack({
      delta: 1
    })
  }
  

})