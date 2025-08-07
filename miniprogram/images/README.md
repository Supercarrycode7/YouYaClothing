# 图标文件说明

## 当前状态
为了避免编译错误，已临时移除了 tabBar 的图标配置。

## 如何添加图标

### 1. 准备图标文件
您需要准备以下 6 个图标文件（建议大小：81px × 81px）：

**普通状态图标：**
- `icon_home.png` - 首页图标
- `icon_product.png` - 商品图标  
- `icon_admin.png` - 管理图标

**选中状态图标：**
- `icon_home_selected.png` - 首页选中图标
- `icon_product_selected.png` - 商品选中图标
- `icon_admin_selected.png` - 管理选中图标

### 2. 放置图标文件
将这些图标文件放到 `images/` 目录下。

### 3. 更新 app.json 配置
在 `app.json` 的 tabBar 配置中添加图标路径：

```json
"list": [
  {
    "pagePath": "pages/index/index",
    "iconPath": "images/icon_home.png",
    "selectedIconPath": "images/icon_home_selected.png",
    "text": "首页"
  },
  {
    "pagePath": "pages/products/list",
    "iconPath": "images/icon_product.png",
    "selectedIconPath": "images/icon_product_selected.png",
    "text": "商品"
  },
  {
    "pagePath": "pages/admin/login",
    "iconPath": "images/icon_admin.png",
    "selectedIconPath": "images/icon_admin_selected.png",
    "text": "管理"
  }
]
```

### 4. 图标设计建议
- 使用简洁的线条图标
- 普通状态用灰色 (#7A7E83)
- 选中状态用绿色 (#3cc51f)
- 保持图标风格统一

## 在线图标资源
- iconfont (阿里图标库): https://www.iconfont.cn/
- iconpark (字节图标库): https://iconpark.oceanengine.com/
- 免费图标下载: https://www.flaticon.com/
