from dotenv import load_dotenv
from pathlib import Path
import os

# Project root (CodePilot-AI)
BASE_DIR = Path(__file__).resolve().parents[3]

# Load .env from project root
load_dotenv(BASE_DIR / ".env")


class Settings:

    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

    DEBUG = os.getenv("DEBUG", "False") == "True"

    API_HOST = os.getenv("API_HOST", "127.0.0.1")

    API_PORT = int(os.getenv("API_PORT", 8000))

    GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")


settings = Settings()