# Architecture Decisions (ADR)

Project: CodePilot AI

Version: 1.0

Author: Tushar Mahapatra

---

# Purpose

This document records important architectural and technical decisions made during the development of CodePilot AI.

Each decision includes:

- Problem
- Decision
- Reason
- Alternatives
- Future Impact

---

# ADR-001

## Decision

Build the project completely from scratch.

## Reason

- Better learning
- Full ownership
- No copied code
- Easier debugging
- Strong portfolio value

## Alternatives

- Clone existing projects
- Use templates

## Result

Original implementation.

---

# ADR-002

## Decision

Use Vanilla HTML, CSS and JavaScript.

## Reason

- Easier to understand
- No build tools
- Faster development
- Beginner friendly

## Alternatives

React

Vue

Angular

## Future

React migration remains possible.

---

# ADR-003

## Decision

Use Python as backend language.

## Reason

- Simple syntax
- Excellent AI ecosystem
- Strong community
- Fast development

## Alternatives

Node.js

Java Spring Boot

Go

---

# ADR-004

## Decision

Use FastAPI.

## Reason

- High performance
- Automatic Swagger documentation
- Type validation
- Async support

## Alternatives

Flask

Django

Express.js

---

# ADR-005

## Decision

Use Google Gemini API.

## Reason

- Easy integration
- Good free tier
- Strong code understanding
- Well suited for AI review tasks

## Alternatives

OpenAI

Claude

DeepSeek

Llama

---

# ADR-006

## Decision

No database in Version 1.

## Reason

Current application is stateless.

User

↓

Review

↓

AI Response

No persistence required.

## Future

SQLite

↓

PostgreSQL

---

# ADR-007

## Decision

Use Layered Architecture.

## Layers

Routes

↓

Controllers

↓

Services

↓

AI Integration

## Reason

- Clean code
- Easy maintenance
- Easy testing
- Scalable

---

# ADR-008

## Decision

Separate Prompt Templates.

## Reason

Business logic and AI prompts should not be mixed.

Benefits

- Easy maintenance
- Prompt versioning
- Better testing

---

# ADR-009

## Decision

REST API instead of GraphQL.

## Reason

- Simpler
- Better for beginners
- Easier frontend integration
- Well supported by FastAPI

---

# ADR-010

## Decision

Use Markdown for AI responses.

## Reason

- Readable
- Supports code blocks
- Easy PDF conversion
- Easy HTML conversion

---

# ADR-011

## Decision

No Docker in Version 1.

## Reason

- Avoid unnecessary complexity
- Focus on core application
- Easier onboarding

## Future

Docker will be introduced after the application becomes stable.

---

# ADR-012

## Decision

Frontend and Backend remain separate.

## Reason

- Better scalability
- Independent deployment
- Easier maintenance

---

# ADR-013

## Decision

Use .env for secrets.

## Reason

Never expose API keys inside source code.

---

# ADR-014

## Decision

Single Page Layout.

## Reason

Only one primary workflow exists.

Paste Code

↓

Review

↓

Result

Multiple pages are unnecessary in Version 1.

---

# ADR-015

## Decision

Use modular folder structure.

## Reason

Avoid large files.

Improve maintainability.

Easy future expansion.

---

# ADR-016

## Decision

Implement features incrementally.

Development Order

Project Setup

↓

Frontend

↓

Backend

↓

AI Integration

↓

Core Features

↓

Advanced Features

## Reason

Lower risk

Continuous testing

Better quality

---

# ADR-017

## Decision

Manual testing before automated testing.

## Reason

Early versions change frequently.

Automation will be introduced after the API stabilizes.

---

# ADR-018

## Decision

Use GitHub for version control.

## Reason

- Industry standard
- Collaboration
- Portfolio
- CI/CD support

---

# ADR-019

## Decision

Deploy Frontend and Backend separately.

Frontend

Vercel

Backend

Render

## Reason

Independent scaling.

Simpler deployment.

---

# ADR-020

## Decision

Follow Documentation First Development.

Workflow

Documentation

↓

Design

↓

Development

↓

Testing

↓

Deployment

## Reason

Reduces ambiguity.

Improves code quality.

Simplifies maintenance.

---

# Future Decisions

Future ADRs will document:

- Authentication strategy
- Database migration
- Docker adoption
- PostgreSQL migration
- GitHub integration
- AI chat architecture
- ZIP analysis architecture
- Performance optimization