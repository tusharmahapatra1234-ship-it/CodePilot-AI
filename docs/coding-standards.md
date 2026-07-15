# Coding Standards

Project: CodePilot AI

Version: 1.0

Author: Tushar Mahapatra

---

# 1. Purpose

This document defines the coding standards and best practices for the CodePilot AI project.

The objective is to ensure:

- Readable code
- Maintainable code
- Consistent naming
- Reusable components
- Easy debugging
- Team collaboration

---

# 2. General Principles

- Keep code simple.
- Avoid unnecessary complexity.
- Write self-explanatory code.
- Do not repeat yourself (DRY).
- Follow Single Responsibility Principle (SRP).
- Prefer readability over cleverness.

---

# 3. Project Structure

Do not place everything in one file.

Each module should have a single responsibility.

Example

backend/
    routes/
    services/
    prompts/
    validators/
    models/
    utils/

frontend/
    css/
    js/
    assets/

---

# 4. Naming Conventions

## Variables

Use snake_case in Python.

Good

user_name

review_result

api_response

Bad

UserName

USERNAME

reviewResult

---

## Functions

Use snake_case.

Good

generate_prompt()

review_code()

validate_request()

Bad

GeneratePrompt()

ReviewCode()

---

## Classes

Use PascalCase.

Good

PromptBuilder

ReviewService

GeminiClient

Bad

promptbuilder

review_service

---

## Constants

Use UPPER_CASE.

Good

MAX_CODE_LENGTH

SUPPORTED_LANGUAGES

API_TIMEOUT

---

## File Names

Use lowercase with underscores.

Good

review_service.py

prompt_builder.py

language_validator.py

Bad

ReviewService.py

Review-Service.py

---

# 5. Python Standards

Follow PEP 8.

Maximum line length

88 characters

Use type hints wherever possible.

Example

def review_code(code: str) -> str:

Always use meaningful variable names.

Avoid global variables.

---

# 6. JavaScript Standards

Use ES6+

Use const by default.

Use let only when required.

Avoid var.

Use camelCase.

Good

reviewButton

apiResponse

Bad

review_button

ReviewButton

---

# 7. HTML Standards

Use semantic HTML.

Examples

header

main

section

article

footer

Avoid unnecessary div nesting.

Use proper labels for form elements.

---

# 8. CSS Standards

Organize CSS into modules.

Use CSS variables.

Example

--primary-color

--background-color

Avoid inline styles.

Use class selectors instead of IDs where possible.

Class naming

Use kebab-case.

Good

action-button

code-editor

output-panel

Bad

ActionButton

codeEditor

---

# 9. Comments

Write comments only when necessary.

Good

Explain WHY.

Avoid explaining WHAT.

Bad

# Increment i by one

Good

# Retry request because Gemini may return temporary errors

---

# 10. Functions

One function should perform one task.

Maximum function length

30 lines (recommended)

Split long functions into smaller reusable functions.

---

# 11. Error Handling

Never ignore exceptions.

Use specific exception handling.

Bad

except:

Good

except ValueError:

Return meaningful error messages.

---

# 12. Logging

Use logging instead of print().

Log

Errors

Warnings

Application startup

API requests

Do not log API keys or sensitive data.

---

# 13. API Standards

Validate all incoming requests.

Return proper HTTP status codes.

Use consistent JSON responses.

Example

{
    "success": true,
    "message": "Review completed",
    "data": {}
}

---

# 14. Security

Never hardcode API keys.

Use .env files.

Validate all user inputs.

Escape unsafe content.

Limit request size.

---

# 15. Git Standards

Branch Naming

feature/ai-review

feature/file-upload

bugfix/login-error

hotfix/api-timeout

Commit Format

feat: Add review endpoint

fix: Handle Gemini timeout

docs: Update README

refactor: Improve prompt builder

style: Update button design

test: Add validation tests

---

# 16. Documentation

Every module should include a brief description.

Public functions should have docstrings.

Example

Purpose

Parameters

Returns

Raises (if applicable)

---

# 17. Code Review Checklist

Before committing code:

✓ Code runs without errors

✓ No unused imports

✓ No commented-out code

✓ No duplicate logic

✓ Meaningful variable names

✓ Proper error handling

✓ Documentation updated

✓ Tested locally

---

# 18. Testing Standards

Test both valid and invalid inputs.

Test edge cases.

Verify error responses.

Check browser compatibility.

---

# 19. Performance Guidelines

Avoid unnecessary API calls.

Reuse utility functions.

Optimize loops.

Avoid duplicate processing.

Keep frontend lightweight.

---

# 20. Future Standards

Introduce linting.

Python

- Black
- Ruff

JavaScript

- ESLint
- Prettier

Add automated testing.

Enable CI/CD.

---

# 21. Definition of Done

A task is complete only if:

- Feature works correctly.
- Code follows project standards.
- Error handling is implemented.
- Documentation is updated.
- Code reviewed.
- Tested manually.
- Ready for Git commit.