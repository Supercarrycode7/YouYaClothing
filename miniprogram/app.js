// app.js
App({
  globalData: {
    userInfo: null,
    baseUrl: 'http://localhost:8000',
    isLogin: false,
    userRole: 'customer' // customer | admin
  },

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功', res.code)
      }
    })
  },

  onShow() {
    // 小程序启动，或从后台进入前台显示时触发
  },

  onHide() {
    // 小程序从前台进入后台时触发
  },

  onError(msg) {
    console.log('小程序错误:', msg)
  },

  // 全局方法
  request(options) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.globalData.baseUrl + options.url,
        method: options.method || 'GET',
        data: options.data || {},
        header: {
          'Content-Type': 'application/json',
          ...options.header
        },
        success: resolve,
        fail: reject
      })
    })
  }
})
