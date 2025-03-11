from fastapi import FastAPI
from app import models
from app.database import engine
from app.routers import auth

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
