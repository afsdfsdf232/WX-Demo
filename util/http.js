import { config } from '../config.js'
const tips = {
  1:'抱歉，出现错误', //默认错误
  1005:'appkey无效',
  3000:'期刊不存在',
  401:'没有权限',
  500:'服务器错误'
}
class HTTP{
  request(params){
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      success: (res) => {
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          params.success && params.success(res.data)
        }else{
          this._show_error(code)
        }
      },
      fail: (err) => {
        this._show_error(1)
      }
    })
  }
  _show_error(err_code){
    wx.showToast({
      title: tips[err_code] ? tips[err_code] : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export default HTTP 