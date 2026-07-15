# Backend Design

Project: CodePilot AI

Version: 1.0

Author: Tushar Mahapatra

---

# 1. Overview

The backend is responsible for processing client requests, validating input, generating AI prompts, communicating with Google Gemini API, and returning structured responses to the frontend.

The backend follows a layered architecture to ensure modularity, maintainability, and scalability.

---

# 2. Design Goals

- Clean Architecture
- Modular Code
- Easy to Maintain
- Easy to Extend
- High Performance
- Secure API
- Proper Error Handling
- Reusable Components

---

# 3. Backend Architecture

                Client
                   │
                   ▼
          FastAPI Router
                   │
                   ▼
            Request Validator
                   │
                   ▼
              Review Service
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Prompt Builder        Gemini Service
        │                     │
        └──────────┬──────────┘
                   ▼
          Response Formatter
                   │
                   ▼
               JSON Response

---

# 4. Request Lifecycle

1. Client sends request
2. FastAPI receives request
3. Validate request body
4. Validate programming language
5. Validate review action
6. Build AI prompt
7. Send request to Gemini
8. Receive AI response
9. Format response
10. Return JSON to frontend

---

# 5. Backend Modules

Core Modules

- API Router
- Controller
- Service Layer
- Prompt Builder
- Gemini Integration
- Validation
- Configuration
- Logging
- Error Handling

Future Modules

- Authentication
- Database
- File Upload
- ZIP Extraction
- GitHub Integration
- Analytics

---

# 6. Folder Structure

backend/

│

├── app/

│   ├── main.py

│   ├── routes/

│   │      review.py
│   │      health.py

│   ├── controllers/

│   │      review_controller.py

│   ├── services/

│   │      review_service.py
│   │      gemini_service.py

│   ├── prompts/

│   │      explain.py
│   │      bugs.py
│   │      improve.py
│   │      optimize.py
│   │      docs.py
│   │      tests.py

│   ├── models/

│   │      request.py
│   │      response.py

│   ├── validators/

│   │      language_validator.py
│   │      code_validator.py

│   ├── config/

│   │      settings.py

│   ├── middleware/

│   │      cors.py

│   ├── utils/

│   │      helpers.py
│   │      constants.py

│   └── exceptions/

│          handlers.py

│

├── requirements.txt

├── .env

└── README.md

---

# 7. Responsibilities

main.py

Starts FastAPI application.

Loads routes.

Loads middleware.

---

Routes

Receive HTTP requests.

Call controllers.

Return response.

---

Controllers

Validate request.

Call services.

Return formatted output.

---

Services

Business logic.

AI communication.

Prompt processing.

---

Prompt Builder

Creates prompts for different review types.

Examples

Explain

Find Bugs

Optimize

Documentation

Tests

---

Gemini Service

Communicates with Google Gemini API.

Handles

Authentication

Request

Response

Errors

---

Validators

Check

Empty code

Unsupported language

Invalid action

Maximum code length

---

Config

Loads

Environment variables

API keys

Project settings

Constants

---

Utils

Common helper functions.

Reusable logic.

---

Exceptions

Global error handling.

Returns proper HTTP responses.

---

# 8. API Endpoints

GET

/api/v1/health

POST

/api/v1/review

GET

/api/v1/languages

GET

/api/v1/actions

GET

/api/v1/version

---

# 9. Request Validation

Required

Language

Action

Code

Validation Rules

Code cannot be empty.

Language must be supported.

Action must be valid.

Maximum request size limit.

---

# 10. AI Processing Flow

Receive code

↓

Validate

↓

Select Prompt Template

↓

Insert User Code

↓

Generate Final Prompt

↓

Call Gemini

↓

Receive Response

↓

Format Response

↓

Return JSON

---

# 11. Error Handling

400

Bad Request

401

Unauthorized

404

Not Found

429

Too Many Requests (Future)

500

Internal Server Error

503

Gemini Service Unavailable

---

# 12. Logging

Log

Application Start

Incoming Requests

Errors

Gemini Response Time

Warnings

Future

Request Analytics

---

# 13. Security

Store API Key in .env

Never expose API key

Input Validation

Request Size Limit

Secure CORS Configuration

Future

JWT Authentication

Rate Limiting

HTTPS

---

# 14. Performance

Async API

FastAPI

Connection Reuse

Prompt Templates

Future

Caching

Background Tasks

Redis

---

# 15. Future Modules

Authentication

User Profiles

Review History

SQLite

MongoDB

File Upload

ZIP Analysis

GitHub Repository Analysis

AI Chat

Dashboard

---

# 16. Deployment Ready

Backend is designed to support

Local Development

Docker

Render

Railway

AWS

Azure

Google Cloud

without major architecture changes.

---

# 17. Design Principles

Single Responsibility Principle

Separation of Concerns

Layered Architecture

Reusable Services

Loose Coupling

High Cohesion

Scalable Design

Maintainable Code

Readable Code

Industry Best Practices