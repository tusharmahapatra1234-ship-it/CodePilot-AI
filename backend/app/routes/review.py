from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class ReviewRequest(BaseModel):
    code: str
    language: str
    action: str


@router.post("/review")
def review_code(request: ReviewRequest):

    return {
        "success": True,
        "message": "Review received successfully.",
        "language": request.language,
        "action": request.action,
        "code_length": len(request.code),
        "response": f"This is a dummy AI response for {request.language} code."
    }