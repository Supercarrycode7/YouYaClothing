// pages/products/detail.js
Page({
  data: {
    product: {},
    loading: false
  },

  onLoad(options) {
    const productId = options.id
    this.loadProduct(productId)
  },

  loadProduct(id) {
    this.setData({ loading: true })
    // TODO: 调用API获取商品详情
    console.log('加载商品详情:', id)
    
    // 模拟数据
    setTimeout(() => {
      this.setData({
        product: {
          id: id,
          name: '时尚T恤',
          price: 99,
          description: '这是一款非常舒适的T恤，采用优质面料制作，透气性好，适合日常穿着。',
          images: ['/images/product1.svg', '/images/product1_2.svg']
        },
        loading: false
      })
    }, 1000)
  }
})
