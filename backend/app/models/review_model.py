from pydantic import BaseModel


class ReviewRequest(BaseModel):
    code: str
    language: str
    action: str


class ReviewResponse(BaseModel):
    success: bool
    message: str
    language: str
    action: str
    code_length: int
    response: str