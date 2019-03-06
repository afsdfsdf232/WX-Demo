// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    } ,
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'/images/like/like.png',
    noSrc:'/images/like/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(ev){
      let like = this.properties.like?false:true
      let count = like ? this.data.count + 1 : this.data.count -1
      this.setData({
        count: count,
        like: like
      })
      //点击发送请求事件要传送给要使用改组件的页面
      let behavior = this.properties.like?'like':'cancel' //判断用户是点赞还是取消点赞
      this.triggerEvent('like',  // triggerEvent 激活事件 ,第一个参数为事件名
                        {  
                          behavior: behavior  //第二个参数为自定义参数，对象类型
                        },
                         {})                  //第三个参数为官方规定参数，比如是否事件冒泡等
      //事件激活后在相应使用的组件页面绑定 bind: like = "事件名"
      // console.log(this.data)
    }
  }
})
