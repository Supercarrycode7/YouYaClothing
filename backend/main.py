from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import auth, products, inventory, sales
from app.models import database

app = FastAPI(
    title="优雅服饰店管理系统",
    description="服饰店综合管理系统后端API",
    version="1.0.0"
)

# 配置CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 生产环境中应该限制具体域名
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册路由
app.include_router(auth.router, prefix="/api/auth", tags=["认证"])
app.include_router(products.router, prefix="/api/products", tags=["商品管理"])
app.include_router(inventory.router, prefix="/api/inventory", tags=["库存管理"])
app.include_router(sales.router, prefix="/api/sales", tags=["销售管理"])

@app.on_event("startup")
async def startup_event():
    """应用启动时执行"""
    await database.connect()

@app.on_event("shutdown")
async def shutdown_event():
    """应用关闭时执行"""
    await database.disconnect()

@app.get("/")
async def root():
    return {"message": "优雅服饰店管理系统API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
