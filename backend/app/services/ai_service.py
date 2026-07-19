from google import genai

from backend.app.config.settings import settings

# Fallback models tried (in order) when the configured model is unavailable.
FALLBACK_MODELS = [
    "gemini-3.1-flash-lite",
    "gemini-3.5-flash",
    "gemini-2.5-flash",
    "gemini-2.0-flash",
]


class AIService:

    def __init__(self):

        self.client = None
        self.model = settings.GEMINI_MODEL

        api_key = settings.GEMINI_API_KEY

        if api_key:
            self.client = genai.Client(api_key=api_key)
        else:
            self.client = None

    def _is_model_unavailable(self, error: Exception) -> bool:

        message = str(error).lower()

        return (
            "404" in message
            or "not_found" in message
            or "no longer available" in message
            or "not found" in message
        )

    def _generate(self, model: str, prompt: str) -> str:

        if self.client is None:
            raise RuntimeError("Gemini API key is not configured.")

        response = self.client.models.generate_content(
            model=model,
            contents=prompt
        )

        if response.text:
            return response.text

        return "No response generated."

    def generate_response(self, prompt: str) -> str:

        try:
            return self._generate(self.model, prompt)

        except Exception as e:

            print(f"Gemini Error ({self.model}):", e)

            if not self._is_model_unavailable(e):
                return f"Error: {str(e)}"

        # Configured model is unavailable -> try fallbacks once.
        for fallback in FALLBACK_MODELS:

            if fallback == self.model:
                continue

            try:

                result = self._generate(fallback, prompt)

                print(f"Gemini fallback model selected: {fallback}")

                # Remember the working model for next calls.
                self.model = fallback

                return result

            except Exception as fallback_error:

                print(f"Gemini Error ({fallback}):", fallback_error)

        if not settings.GEMINI_API_KEY:
            return "Gemini API key is not configured. Please set GEMINI_API_KEY to enable AI reviews."

        return "Error: No available Gemini model responded. Please try again later."