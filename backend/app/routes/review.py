from fastapi import APIRouter
from pydantic import BaseModel

from backend.app.controllers.review_controller import ReviewController

router = APIRouter()

controller = ReviewController()


class ReviewRequest(BaseModel):
    code: str
    language: str


# ==========================
# Explain
# ==========================

@router.post("/explain")
def explain(request: ReviewRequest):

    response = controller.explain(
        request.code,
        request.language
    )

    return {
        "success": True,
        "response": response
    }


# ==========================
# Bugs
# ==========================

@router.post("/bugs")
def bugs(request: ReviewRequest):

    response = controller.bugs(
        request.code,
        request.language
    )

    return {
        "success": True,
        "response": response
    }


# ==========================
# Improve
# ==========================

@router.post("/improve")
def improve(request: ReviewRequest):

    response = controller.improve(
        request.code,
        request.language
    )

    return {
        "success": True,
        "response": response
    }


# ==========================
# Optimize
# ==========================

@router.post("/optimize")
def optimize(request: ReviewRequest):

    response = controller.optimize(
        request.code,
        request.language
    )

    return {
        "success": True,
        "response": response
    }


# ==========================
# Documentation
# ==========================

@router.post("/generate-docs")
def generate_docs(request: ReviewRequest):

    response = controller.docs(
        request.code,
        request.language
    )

    return {
        "success": True,
        "response": response
    }


# ==========================
# Generate Unit Tests
# ==========================

@router.post("/generate-tests")
def generate_tests(request: ReviewRequest):

    response = controller.tests(
        request.code,
        request.language
    )

    return {
        "success": True,
        "response": response
    }