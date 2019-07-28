// 注册一个小程序实例
App({
  // 生命周期函数: 存活两个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  
  onLaunch: function() {
    // 在这里可以获取用户信息
   console.log("小程序初始化了")
  //  wx.request({
  //    url: '',
  //  })
  // 异步调用获取用户的信息
  //  wx.getUserInfo({
  //    success: function(res) {
  //      console.log(res)
  //    }
  //  })
    // setTimeout(function(){
    //   const err = new Error()
    //   throw err
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    // 在这里可以判断小程序的进入场景
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {
    console.log('界面被隐藏时会执行: onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log('小程序中发生一些错误时会执行')
  },
  globalData: {
    name: 'dlwlrma',
    age:23
  }
})