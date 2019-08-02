// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleBtnClick:function() {
    console.log("按钮发生了点击")
  },
  handleTouchStart:function() {
    console.log("handleTouchStart")
  },
  handleTouchMove: function () {
    console.log("handleTouchMove")
  },
  handleTouchEnd: function () {
    console.log("handleTouchEnd")
  },
  handleTap: function () {
    console.log("handleTap")
  },
  handleLongPress: function () {
    console.log("handleLongPress")
  },
  handleEventClick:function(event) {
    console.log('------',event)
  },
  // 事件冒泡和事件捕获
  handleCaptureView1:function() {
    console.log('handleCaptureView1')
  },
  handleTapView1: function () {
    console.log('handleTapView1')
  },
  handleCaptureView2: function () {
    console.log('handleCaptureView2')
  },
  handleTapView2: function () {
    console.log('handleTapView2')
  },
  handleCaptureView3: function () {
    console.log('handleCaptureView3')
  },
  handleTapView3: function () {
    console.log('handleTapView3')
  }
})