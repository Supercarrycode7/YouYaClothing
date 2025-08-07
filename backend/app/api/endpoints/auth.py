from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.models.database import get_db

router = APIRouter()

@router.post("/login")
async def login(db: Session = Depends(get_db)):
    """用户登录"""
    # TODO: 实现登录逻辑
    return {"message": "登录功能待实现"}

@router.post("/register")
async def register(db: Session = Depends(get_db)):
    """用户注册"""
    # TODO: 实现注册逻辑
    return {"message": "注册功能待实现"}

@router.post("/wechat-login")
async def wechat_login(db: Session = Depends(get_db)):
    """微信小程序登录"""
    # TODO: 实现微信登录逻辑
    return {"message": "微信登录功能待实现"}
