
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function(newVal, oldVal, changedPath){
        // newVal 改变后的数据  
        let val =newVal< 10? '0' + newVal : newVal
        this.setData({  //不能在此处改变属性值
          _index: val
        })
        // oldVal 改变前的数据
        // changedPath 路径
      }
    }
  },
attached(){
  let data = new Date()
  let year = data.getFullYear()
  let mouth = data.getMonth()
  this.setData({
    month: this.data.months[mouth],
    year: year
  })
},
  /**
   * 组件的初始数据
   */
  data: {
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月","十一月", "十二月"],
    _index: '',
    month:' ',
    year: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
