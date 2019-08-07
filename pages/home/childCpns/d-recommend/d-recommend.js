// pages/home/childCpns/d-recommend/d-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad() {
      // console.log('图片加载完成')
      if(!this.data.isLoad){
        this.triggerEvent('imageload')
        this.data.isLoad = true
      }
    }
  }
})
