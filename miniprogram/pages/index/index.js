// pages/index/index.js
const app = getApp()

Page({
  data: {
    banners: [
      {
        id: 1,
        image: '/images/banner1.svg',
        title: '春季新品',
        subtitle: 'SPRING COLLECTION 2025'
      },
      {
        id: 2,
        image: '/images/banner2.svg',
        title: '夏日清新',
        subtitle: 'SUMMER FRESH 2025'
      }
    ],
    categories: [
      {
        id: 1,
        name: '上衣',
        icon: '/images/category_top.svg'
      },
      {
        id: 2,
        name: '裤装',
        icon: '/images/category_pants.svg'
      },
      {
        id: 3,
        name: '裙装',
        icon: '/images/category_dress.svg'
      },
      {
        id: 4,
        name: '外套',
        icon: '/images/category_coat.svg'
      }
    ],
    newProducts: []
  },

  onLoad() {
    this.loadNewProducts()
  },

  loadNewProducts() {
    // TODO: 调用API获取新品数据
    console.log('加载新品数据')
    // 模拟数据 - 增加更多商品以展示两列布局效果
    this.setData({
      newProducts: [
        {
          id: 1,
          name: '优雅时尚T恤',
          price: 299,
          originalPrice: 399,
          image: '/images/product1.svg',
          tag: '新品'
        },
        {
          id: 2,
          name: '时尚休闲裤',
          price: 459,
          originalPrice: 599,
          image: '/images/product2.svg',
          tag: '热销'
        },
        {
          id: 3,
          name: '春季外套',
          price: 899,
          originalPrice: 1199,
          image: '/images/product1.svg',
          tag: '限量'
        },
        {
          id: 4,
          name: '清新连衣裙',
          price: 659,
          originalPrice: 899,
          image: '/images/product2.svg',
          tag: '推荐'
        },
        {
          id: 5,
          name: '简约白衬衫',
          price: 389,
          originalPrice: 499,
          image: '/images/product1.svg',
          tag: '新品'
        },
        {
          id: 6,
          name: '高腰牛仔裤',
          price: 529,
          originalPrice: 699,
          image: '/images/product2.svg',
          tag: '热销'
        }
      ]
    })
  },

  navigateToCategory(e) {
    const categoryId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/products/list?categoryId=${categoryId}`
    })
  },

  navigateToDetail(e) {
    const productId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/products/detail?id=${productId}`
    })
  }
})
