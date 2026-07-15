# API Specification

Project: CodePilot AI

Version: 1.0

Protocol: HTTP

API Style: REST API

Data Format: JSON

---

# Base URL

Development

http://localhost:8000/api/v1

Production

https://api.codepilot.ai/api/v1

---

# API Versioning

Current Version

v1

Example

/api/v1/review

Future

/api/v2/

---

# Common Response Format

Success

{
    "success": true,
    "message": "Request completed successfully",
    "data": {}
}

Error

{
    "success": false,
    "message": "Something went wrong",
    "error": {}
}

---

# HTTP Status Codes

200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

429 Too Many Requests

500 Internal Server Error

---

# Endpoint 1

Health Check

GET

/api/v1/health

Description

Checks whether backend is running.

Response

{
    "status": "online",
    "version": "1.0.0"
}

---

# Endpoint 2

Review Code

POST

/api/v1/review

Description

Main endpoint for AI code review.

Request

{
    "language":"python",
    "action":"explain",
    "code":"print('Hello')"
}

Response

{
    "success":true,
    "review":"..."
}

---

# Endpoint 3

Supported Languages

GET

/api/v1/languages

Description

Returns supported programming languages.

Response

[
    "Python",
    "Java",
    "JavaScript",
    "C",
    "C++",
    "HTML",
    "CSS",
    "SQL"
]

---

# Endpoint 4

Supported Actions

GET

/api/v1/actions

Response

[
    "Explain",
    "Find Bugs",
    "Improve Code",
    "Optimize",
    "Generate Docs",
    "Generate Tests"
]

---

# Endpoint 5

Upload File (Version 1.1)

POST

/api/v1/upload

Content-Type

multipart/form-data

Input

File

Response

{
    "filename":"demo.py",
    "language":"Python"
}

---

# Endpoint 6

Review Uploaded File

POST

/api/v1/review-file

Input

{
    "file_id":"abc123",
    "action":"bugs"
}

---

# Endpoint 7

Download Report

GET

/api/v1/report/{id}

Returns

Markdown

or

PDF

---

# Endpoint 8

User Login (Future)

POST

/api/v1/auth/login

---

# Endpoint 9

Signup

POST

/api/v1/auth/register

---

# Endpoint 10

Review History

GET

/api/v1/history

---

# Endpoint 11

Delete Review

DELETE

/api/v1/history/{id}

---

# Endpoint 12

AI Chat

POST

/api/v1/chat

Request

{
    "message":"Explain recursion"
}

---

# Endpoint 13

Project Upload

POST

/api/v1/project/upload

Accepts

ZIP

---

# Endpoint 14

GitHub Review

POST

/api/v1/github-review

Request

{
    "url":"https://github.com/user/repository"
}

---

# Error Responses

Invalid Language

400

{
    "success":false,
    "message":"Unsupported language"
}

Empty Code

400

{
    "success":false,
    "message":"Code cannot be empty"
}

Invalid Action

400

{
    "success":false,
    "message":"Invalid review action"
}

Gemini Error

500

{
    "success":false,
    "message":"AI service unavailable"
}

---

# Authentication

Version 1

No authentication

Version 2

JWT Bearer Token

Authorization

Bearer <token>

---

# Rate Limiting

Version 1

None

Future

100 requests/hour/user

---

# API Flow

Client

↓

Validate Input

↓

POST /review

↓

FastAPI

↓

Prompt Builder

↓

Gemini API

↓

Response

↓

Frontend

---

# Future APIs

/project-summary

/security-score

/performance-score

/code-smells

/duplicate-code

/refactor

/dashboard

/admin

/analytics