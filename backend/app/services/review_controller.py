from backend.app.services.review_service import ReviewService


class ReviewController:

    def __init__(self):

        self.review_service = ReviewService()

    # ==========================
    # Explain Code
    # ==========================

    def explain(self, code, language):

        return self.review_service.explain(code, language)

    # ==========================
    # Find Bugs
    # ==========================

    def bugs(self, code, language):

        return self.review_service.bugs(code, language)

    # ==========================
    # Improve Code
    # ==========================

    def improve(self, code, language):

        return self.review_service.improve(code, language)

    # ==========================
    # Optimize Code
    # ==========================

    def optimize(self, code, language):

        return self.review_service.optimize(code, language)

    # ==========================
    # Generate Documentation
    # ==========================

    def docs(self, code, language):
 
        return self.review_service.docs(code, language)