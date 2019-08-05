// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  // ---------让使用者可以给组件传入数据
  properties: {
    title: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  // ----------定义组件内部的初始化数据
  data: {

  },

  /**
   * 组件的方法列表
   */

  // 用于定义组件内部的函数
  methods: {
    foo() {

    }
  },
  // -------定义组件的配置选项
  // multipleSlots: 在使用多插条时需要设置true
  // styleIsolation: 设置样式的隔离方式
  options: {
    multipleSlots: true
  },

  // ------------外界给组件出入额外的样式
  externalClasses: [],

  // -----------可以监听properties/data的改变
  observers: {
    counter: function(newVal) {
      console.log(newVal)
    }
  },

  // ------------组件中监听生命周期函数
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show: function() {
      console.log('监听组件所在页面显示出来时')
    },
    hide: function() {
      console.log('监听组件所在页面隐藏起来时')
    },
    resize: function() {
      console.log('监听所在页面尺寸改变时')
    }
  },

  // 2.监听组件本身的生命周期
  lifetimes: {
    created: function() {
      console.log('组件被创建出来')
    },
    attached: function() {
      console.log('组件被添加到页面')
    },
    ready: function() {
      console.log('组件被渲染出来时')
    },
    moved: function() {
      console.log('组件被移动到另外一个节点')
    },
    detached: function() {
      console.log('组件被移除时')
    }
  }

})
