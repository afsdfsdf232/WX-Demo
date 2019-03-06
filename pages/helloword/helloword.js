Page({
  data: {
    isShow: false,
    h: "is Hello world Page",
    items: [
      { id: 1, name: '商品1'},
      { id: 2, name: '商品2' },
      { id: 3, name: '商品3' },
      { id: 4, name: '商品4' },
      { id: 5, name: '商品5' },
      { id: 6, name: '商品6' },
    ],
    condition: Math.floor(Math.random()*3+1),
    templateInfo:{
      name: 'dongdong',
      phone: 110,
      address: '中国'
    }
  }
})