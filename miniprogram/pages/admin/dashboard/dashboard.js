// pages/admin/dashboard.js
const app = getApp()

Page({
  data: {},

  onLoad() {
    // 检查登录状态
    if (!app.globalData.isLogin || app.globalData.userRole !== 'admin') {
      wx.redirectTo({
        url: '/pages/admin/login'
      })
      return
    }
  },

  // 导航到库存管理
  navigateToInventory() {
    wx.navigateTo({
      url: '/pages/admin/inventory'
    })
  },

  // 导航到销售统计
  navigateToSales() {
    wx.navigateTo({
      url: '/pages/admin/sales'
    })
  },

  // 导航到商品管理
  navigateToProducts() {
    wx.navigateTo({
      url: '/pages/admin/products'
    })
  },

  // 导航到条码管理
  navigateToBarcode() {
    wx.navigateTo({
      url: '/pages/admin/barcode'
    })
  },

  // 扫码操作
  scanCode() {
    wx.scanCode({
      success: (res) => {
        console.log('扫码结果:', res.result)
        wx.showModal({
          title: '扫码结果',
          content: `扫描到: ${res.result}`,
          showCancel: false
        })
      },
      fail: (err) => {
        console.error('扫码失败:', err)
        wx.showToast({
          title: '扫码失败',
          icon: 'none'
        })
      }
    })
  },

  // 打印条码
  printBarcode() {
    wx.showToast({
      title: '打印功能待实现',
      icon: 'none'
    })
  },

  // 退出登录
  logout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          app.globalData.isLogin = false
          app.globalData.userRole = 'customer'
          wx.redirectTo({
            url: '/pages/admin/login'
          })
        }
      }
    })
  }
})
