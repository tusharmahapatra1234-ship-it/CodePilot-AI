from backend.app.services.ai_service import AIService
from backend.app.prompts.review_prompts import ReviewPrompts


class ReviewService:

    def __init__(self):
        self.ai = AIService()

    # ==========================
    # Explain Code
    # ==========================

    def explain(self, code: str, language: str):

        prompt = ReviewPrompts.explain(code, language)

        return self.ai.generate_response(prompt)

    # ==========================
    # Find Bugs
    # ==========================

    def bugs(self, code: str, language: str):

        prompt = ReviewPrompts.bugs(code, language)

        return self.ai.generate_response(prompt)

    # ==========================
    # Improve Code
    # ==========================

    def improve(self, code: str, language: str):

        prompt = ReviewPrompts.improve(code, language)

        return self.ai.generate_response(prompt)

    # ==========================
    # Optimize Code
    # ==========================

    def optimize(self, code: str, language: str):

        prompt = ReviewPrompts.optimize(code, language)

        return self.ai.generate_response(prompt)

    # ==========================
    # Generate Documentation
    # ==========================

    def docs(self, code: str, language: str):

        prompt = ReviewPrompts.docs(code, language)

        return self.ai.generate_response(prompt)

    # ==========================
    # Generate Unit Tests
    # ==========================

    def tests(self, code: str, language: str):

        prompt = ReviewPrompts.tests(code, language)

        return self.ai.generate_response(prompt)