// pages/admin/login.js
const app = getApp()

Page({
  data: {
    username: '',
    password: ''
  },

  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    })
  },

  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    })
  },

  onLogin(e) {
    const { username, password } = e.detail.value
    
    // 验证输入
    if (!username || !password) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none',
        duration: 2000
      })
      return
    }

    // 显示加载状态
    wx.showLoading({
      title: '登录中...'
    })

    // TODO: 调用登录API
    console.log('管理员登录:', username, password)
    
    // 模拟登录验证过程
    setTimeout(() => {
      wx.hideLoading()
      
      // 简单的验证逻辑（实际项目中应该调用后端API）
      if (username === '1' && password === '1') {
        // 登录成功
        app.globalData.isLogin = true
        app.globalData.userRole = 'admin'
        app.globalData.userInfo = {
          username: username,
          role: 'admin'
        }
        
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1500,
          success: () => {
            setTimeout(() => {
              wx.reLaunch({
                url: '/pages/admin/dashboard/dashboard'
              })
            }, 1500)
          }
        })
      } else {
        // 登录失败
        wx.showToast({
          title: '用户名或密码错误',
          icon: 'none',
          duration: 2000
        })
      }
    }, 1000)
  },

  scanLogin() {
    wx.scanCode({
      success: (res) => {
        console.log('扫码结果:', res)
        
        wx.showLoading({
          title: '验证中...'
        })
        
        // TODO: 处理扫码登录逻辑
        setTimeout(() => {
          wx.hideLoading()
          wx.showToast({
            title: '扫码登录功能开发中',
            icon: 'none',
            duration: 2000
          })
        }, 1000)
      },
      fail: (err) => {
        console.log('扫码失败:', err)
        wx.showToast({
          title: '扫码失败，请重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  onLoad() {
    // 页面加载时清空之前的登录状态
    app.globalData.isLogin = false
    app.globalData.userRole = ''
    app.globalData.userInfo = null
  }
})
