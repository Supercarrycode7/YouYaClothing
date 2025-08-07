// utils/request.js
const app = getApp()

/**
 * 封装的请求方法
 */
function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: app.globalData.baseUrl + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'Content-Type': 'application/json',
        ...options.header
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: reject
    })
  })
}

/**
 * GET请求
 */
function get(url, data) {
  return request({
    url: url,
    method: 'GET',
    data: data
  })
}

/**
 * POST请求
 */
function post(url, data) {
  return request({
    url: url,
    method: 'POST',
    data: data
  })
}

/**
 * PUT请求
 */
function put(url, data) {
  return request({
    url: url,
    method: 'PUT',
    data: data
  })
}

/**
 * DELETE请求
 */
function del(url, data) {
  return request({
    url: url,
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  request,
  get,
  post,
  put,
  del
}
