# 优雅服饰店综合型小程序

这是一个集成了商品展示、库存管理和销售统计功能的服饰店小程序项目。

## 项目概述

本项目包含两个主要部分：
- **小程序前端**: 提供商品浏览和管理功能
- **Python后端**: 提供API服务和数据管理

## 功能特色

### 顾客功能
- 🎯 新品轮播展示
- 📱 商品分类浏览  
- 🔍 商品详情查看

### 管理员功能
- 📦 库存管理系统
- 🏷️ 条码生成与打印
- 📱 扫码出入库管理
- 📊 销售数据统计报表

## 技术栈

- **前端**: 微信小程序原生开发
- **后端**: Python + FastAPI
- **数据库**: MySQL + Redis
- **部署**: Docker + Nginx

## 快速开始

### 环境要求
- Python 3.8+
- MySQL 5.7+
- Redis
- 微信开发者工具

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/Supercarrycode7/YouYaClothing.git
   cd YouYaClothing
   ```

2. **后端设置**
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate  # Windows
   pip install -r requirements.txt
   cp .env.example .env
   # 编辑 .env 文件配置数据库等信息
   python main.py
   ```

3. **小程序设置**
   - 使用微信开发者工具打开 `miniprogram` 目录
   - 配置你的 AppID
   - 开始开发调试

## 项目结构

```
YouYaClothing/
├── backend/           # Python后端
├── miniprogram/       # 微信小程序
├── docs/             # 项目文档  
├── fs.md             # 开发进度管理
└── README.md         # 项目说明
```

## 开发进度

详细的开发计划和进度请查看 [fs.md](./fs.md) 文件。

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题，请通过以下方式联系：
- 创建 Issue
- 发送邮件到项目维护者

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！