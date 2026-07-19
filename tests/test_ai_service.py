from backend.app.services.ai_service import AIService


class DummyResponse:
    def __init__(self, text):
        self.text = text


class DummyClient:
    def __init__(self):
        self.models = self

    def generate_content(self, model, contents):
        if model == "gemini-3.1-flash-lite":
            raise Exception("404 Not Found")
        return DummyResponse("fallback response")


def test_generate_response_falls_back_when_model_is_unavailable():
    service = AIService.__new__(AIService)
    service.client = DummyClient()
    service.model = "gemini-3.1-flash-lite"

    result = service.generate_response("hello")

    assert result == "fallback response"
