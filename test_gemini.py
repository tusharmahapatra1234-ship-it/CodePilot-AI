from google import genai
from backend.app.config.settings import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)

response = client.models.generate_content(
    model=settings.GEMINI_MODEL,
    contents="Say Hello in one sentence."
)

print(response.text)