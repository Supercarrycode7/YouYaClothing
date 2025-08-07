// pages/products/list.js
Page({
  data: {
    products: [],
    categories: [],
    categoryNames: ['全部'],
    categoryIndex: 0,
    loading: false,
    categoryId: null
  },

  onLoad(options) {
    if (options.categoryId) {
      this.setData({
        categoryId: options.categoryId
      })
    }
    this.loadCategories()
    this.loadProducts()
  },

  loadCategories() {
    // TODO: 调用API获取分类数据
    console.log('加载分类数据')
  },

  loadProducts() {
    this.setData({ loading: true })
    // TODO: 调用API获取商品数据
    console.log('加载商品数据')
    
    // 模拟数据
    setTimeout(() => {
      this.setData({
        products: [
          {
            id: 1,
            name: '时尚T恤',
            price: 99,
            description: '舒适透气，时尚百搭',
            image: '/images/product1.svg'
          },
          {
            id: 2,
            name: '休闲裤',
            price: 159,
            description: '修身显瘦，品质上乘',
            image: '/images/product2.svg'
          }
        ],
        loading: false
      })
    }, 1000)
  },

  onCategoryChange(e) {
    const index = e.detail.value
    this.setData({
      categoryIndex: index
    })
    this.loadProducts()
  },

  navigateToDetail(e) {
    const productId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/products/detail?id=${productId}`
    })
  }
})
