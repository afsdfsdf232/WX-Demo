// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first:Boolean, //是否最新一期
    latest:Boolean //是否最后一期
  },

  /**
   * 组件的初始数据
   */
  data: {
    rightSrc:'images/right.png',
    rightSrc1:'images/right@1.png',
    leftSrc: 'images/left.png',
    leftSrc1: 'images/left@1.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft(){
      this.properties.latest && this.triggerEvent('left', {}, {})
    },
    onRight(){
      this.properties.first && this.triggerEvent('right', {}, {})
    }
  }
})
