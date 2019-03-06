// components/classic/music/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: String,
    content: String,
    musicUrl: {
      type: String,
      value: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3guid=ffffffff82def4af4b12b3cd9337d5e7uin=346897220vkey=6292F51E1E384E061FF02F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    play: 'images/play.png',
    suspend: 'images/suspend.png',
    defaultBj: 'images/default.png',
    targger: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // musicStatus: function(musicUrl, targger){
    //   const innerAudioContext = wx.createInnerAudioContext()
    //   innerAudioContext.src = musicUrl
    //   innerAudioContext.onPlay(() => {
    //     console.log('开始播放')
    //   })
    //   innerAudioContext.onError((res) => {
    //     console.log(res.errMsg)
    //     console.log(res.errCode)
    //   })
    //   targger ? InnerAudioContext.play() : InnerAudioContext.pause()

    // },
    playOrPause(){
      let tar = this.data.targger
      this.setData({
        targger:!tar
      })
      const innerAudioContext = wx.createInnerAudioContext()
      innerAudioContext.src = this.properties.musicUrl
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
      innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
      this.properties.targger ? innerAudioContext.play() : innerAudioContext.pause()
      
    }
  }
})
