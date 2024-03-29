// pages/home/home.js
// 编程范式：
// 1.命令式编程: 原生操作DOM
// 2.声明式编程: Vue/React/Angular
Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [
      { id: 110, name: 'Kobe', age: 30 },
      { id: 111, name: 'James', age: 28 },
      { id: 112, name: 'Curry', age: 32 },
      { id: 113, name: 'Hobby', age: 30 }
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
  }
})