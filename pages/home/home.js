// pages/home/home.js
// 编程范式：
// 1.命令式编程: 原生操作DOM
// 2.声明式编程: Vue/React/Angular
// getApp()获取App()产生的实例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
// 注册一个页面
Page({
  data: {
    name: 'dlwlrma',
    age: 18,
    students: [{
        id: 110,
        name: 'Kobe',
        age: 30
      },
      {
        id: 111,
        name: 'James',
        age: 28
      },
      {
        id: 112,
        name: 'Curry',
        age: 32
      },
      {
        id: 113,
        name: 'Hobby',
        age: 30
      }
    ],
    counter: 0
  },
  handleBtnClickAdd() {
    // 1.错误做法: 界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClickSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },
  // ------------监听有页面的生命周期函数--------------
  // 页面被加载时
  onLoad() {
    console.log('onLoad')
    // wx.request({
      // url: '',
    // })
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  // 页面显示时
  onShow() {
    console.log('onShow')
  },
  // 页面隐藏时
  onHide() {
    console.log('onHide')
  },
  // 页面调用被销毁时
  onUnload() {
    console.log('onUnload')
  },
 // ------------监听wxml的相关事件--------------
  handleViewClick: function() {
    console.log('hello被点击了')
  },
  // ==================4.监听其他事件=============
  onPageScroll(obj) {
    // console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom: function() {
    console.log('页面滚动到了底部')
  },
  onPullDownRefresh() {
    console.log('下拉刷新')
  }
})