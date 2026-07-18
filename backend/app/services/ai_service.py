from google import genai

from backend.app.config.settings import settings


class AIService:

    def __init__(self):

        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

        self.model = settings.GEMINI_MODEL

    def generate_response(self, prompt: str) -> str:

        try:

            response = self.client.models.generate_content(
                model=self.model,
                contents=prompt
            )

            if response.text:
                return response.text

            return "No response generated."

        except Exception as e:

            print("Gemini Error:", e)

            return f"Error: {str(e)}"