# 优雅服饰店小程序项目文档

## 项目结构

```
YouYaClothing/
├── backend/                    # 后端项目
│   ├── app/                   # 应用核心代码
│   │   ├── api/              # API路由
│   │   │   └── endpoints/    # 具体接口实现
│   │   ├── models/           # 数据模型
│   │   ├── services/         # 业务逻辑
│   │   └── utils/            # 工具函数
│   ├── config/               # 配置文件
│   ├── migrations/           # 数据库迁移
│   ├── tests/                # 测试文件
│   ├── main.py              # 应用入口
│   ├── requirements.txt     # 依赖包
│   └── .env.example         # 环境变量示例
├── miniprogram/              # 小程序项目
│   ├── pages/               # 页面
│   │   ├── index/          # 首页
│   │   ├── products/       # 商品相关页面
│   │   └── admin/          # 管理员页面
│   ├── components/         # 组件
│   ├── utils/              # 工具函数
│   ├── images/             # 图片资源
│   ├── styles/             # 样式文件
│   ├── app.js              # 应用逻辑
│   ├── app.json            # 应用配置
│   └── app.wxss            # 全局样式
├── docs/                    # 项目文档
└── README.md               # 项目说明
```

## 技术栈

### 后端
- **框架**: FastAPI
- **数据库**: MySQL + Redis
- **ORM**: SQLAlchemy
- **认证**: JWT
- **部署**: Docker + Nginx

### 前端
- **框架**: 微信小程序原生开发
- **UI**: WeUI
- **状态管理**: globalData
- **工具**: 微信开发者工具

## 功能模块

### 用户端
1. 新品轮播展示
2. 商品分类浏览
3. 商品详情查看

### 管理端
1. 库存管理
2. 条码生成与打印
3. 扫码出入库
4. 销售数据统计

## 开发环境搭建

### 后端环境
1. 安装Python 3.8+
2. 创建虚拟环境: `python -m venv venv`
3. 激活虚拟环境: `venv\Scripts\activate`
4. 安装依赖: `pip install -r requirements.txt`
5. 配置环境变量: 复制`.env.example`为`.env`并修改配置
6. 启动服务: `python main.py`

### 小程序环境
1. 下载并安装微信开发者工具
2. 导入项目目录下的`miniprogram`文件夹
3. 配置AppID
4. 预览和调试

## API接口

### 认证接口
- POST `/api/auth/login` - 用户登录
- POST `/api/auth/register` - 用户注册
- POST `/api/auth/wechat-login` - 微信登录

### 商品接口
- GET `/api/products/` - 获取商品列表
- GET `/api/products/{id}` - 获取商品详情
- POST `/api/products/` - 创建商品（管理员）
- PUT `/api/products/{id}` - 更新商品（管理员）
- DELETE `/api/products/{id}` - 删除商品（管理员）

### 库存接口
- GET `/api/inventory/` - 获取库存列表
- POST `/api/inventory/in` - 入库操作
- POST `/api/inventory/out` - 出库操作
- GET `/api/inventory/records` - 获取库存记录

### 销售接口
- GET `/api/sales/stats` - 获取销售统计
- GET `/api/sales/daily` - 获取日销售数据
- GET `/api/sales/monthly` - 获取月销售数据
- GET `/api/sales/yearly` - 获取年销售数据

## 数据库设计

参考`fs.md`中的数据模型设计部分。

## 部署说明

### 开发环境
- 后端: `http://localhost:8000`
- 小程序: 微信开发者工具本地调试

### 生产环境
- 使用Docker容器化部署
- 配置Nginx反向代理
- 配置SSL证书
- 配置域名解析

## 注意事项

1. 记得配置微信小程序的合法域名
2. 生产环境需要配置真实的数据库连接
3. 确保API接口的安全性
4. 定期备份数据库数据
