from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.routes.review import router as review_router

app = FastAPI(
    title="CodePilot AI",
    description="AI Powered Code Review Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(review_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to CodePilot AI",
        "status": "Running"
    }


@app.get("/health")
def health():
    return {
        "status": "Healthy"
    }