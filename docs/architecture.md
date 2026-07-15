# CodePilot AI - System Architecture

Version: 1.0

---

# 1. Overview

CodePilot AI is a modular AI-powered web application that allows users to analyze source code using Google's Gemini AI.

The system follows a Client-Server Architecture where the frontend communicates with the backend through REST APIs. The backend processes requests, interacts with Gemini AI, and streams responses back to the frontend.

---

# 2. High-Level Architecture

                    User
                      │
                      ▼
        ┌────────────────────────┐
        │      Frontend UI       │
        │ HTML • CSS • JavaScript│
        └──────────┬─────────────┘
                   │
             HTTP / Fetch API
                   │
                   ▼
        ┌────────────────────────┐
        │     FastAPI Server     │
        └──────────┬─────────────┘
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 Prompt Builder  Validators   Services
      │
      ▼
 Gemini Service
      │
      ▼
 Google Gemini API

---

# 3. Architecture Style

Backend:
- Layered Architecture

Frontend:
- Component-Based JavaScript

Communication:
- REST API

Future:
- Streaming API (SSE)

---

# 4. Frontend Architecture

frontend/

index.html

↓

script.js

↓

api.js

↓

render.js

↓

utils.js

Responsibilities

index.html
    UI Layout

style.css
    UI Design

script.js
    Event Handling

api.js
    API Communication

render.js
    Render AI Response

utils.js
    Helper Functions

---

# 5. Backend Architecture

backend/

main.py

↓

routes/

↓

controllers/

↓

services/

↓

prompts/

↓

gemini.py

↓

Gemini API

Responsibilities

Routes
Receive Request

Controllers
Validate Request

Services
Business Logic

Prompt Builder
Create AI Prompt

Gemini Service
Call Gemini API

Response Formatter
Prepare Output

---

# 6. Request Flow

User

↓

Paste Code

↓

Select Language

↓

Choose Action

↓

Frontend Validation

↓

POST Request

↓

Backend Validation

↓

Prompt Builder

↓

Gemini API

↓

AI Response

↓

Format Response

↓

Frontend

↓

Display Output

---

# 7. Modules

Frontend

- Editor Module
- Language Selector
- Action Buttons
- Output Viewer
- Loader
- Toast Notification

Backend

- Review Module
- Prompt Module
- AI Module
- Validation Module
- Logging Module
- Error Handling Module

---

# 8. Folder Structure

CodePilot-AI/

backend/

app/

routes/

controllers/

services/

prompts/

models/

utils/

config/

main.py

frontend/

css/

js/

images/

icons/

docs/

README.md

---

# 9. API Flow

POST

/api/review

Input

{
    code,
    language,
    action
}

↓

Validation

↓

Prompt Generation

↓

Gemini

↓

Response

↓

JSON

---

# 10. Error Handling

Invalid Language

↓

400

Empty Code

↓

400

Gemini Error

↓

500

Network Error

↓

Retry

---

# 11. Security

Environment Variables

API Key Hidden

Input Validation

CORS

Rate Limiting (Future)

Authentication (Future)

---

# 12. Future Architecture

User Login

↓

JWT

↓

Database

↓

History

↓

Project Upload

↓

GitHub Review

↓

Analytics

↓

Admin Dashboard

---

# 13. Scalability

Current

Frontend

↓

FastAPI

↓

Gemini

Future

Frontend

↓

FastAPI

↓

Redis

↓

MongoDB

↓

Gemini

↓

Background Workers

---

# 14. Design Principles

- Modular
- Reusable
- Maintainable
- Scalable
- Clean Code
- Separation of Concerns
- Single Responsibility Principle

---

# 15. Technology Stack

Frontend

HTML5

CSS3

JavaScript

Backend

Python

FastAPI

AI

Google Gemini

Database (Future)

SQLite

MongoDB

Deployment (Future)

Docker

Render

Railway

Vercel

GitHub