from fastapi import FastAPI

app = FastAPI(
    title="CodePilot AI",
    description="AI Powered Code Review Platform",
    version="1.0.0"
)


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