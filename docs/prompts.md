# Prompts Design

Project: CodePilot AI

Version: 1.0

Author: Tushar Mahapatra

---

# 1. Overview

This document defines all AI prompt templates used by CodePilot AI.

The prompts are designed to produce accurate, structured, and beginner-friendly responses while maintaining consistency across all review actions.

Prompt templates are stored separately from business logic to improve maintainability.

---

# 2. Prompt Design Principles

Every prompt should:

- Clearly define AI's role
- Specify the expected output
- Use Markdown formatting
- Be beginner-friendly
- Avoid unnecessary explanations
- Focus only on requested action

---

# 3. Prompt Variables

The following placeholders are used.

{language}

Programming language selected by the user.

{code}

User source code.

---

# 4. Explain Code Prompt

Purpose

Explain source code.

Template

You are an expert software engineer.

Analyze the following {language} code.

Explain:

1. Overall purpose
2. Step-by-step working
3. Functions/classes used
4. Variables used
5. Time Complexity (if applicable)
6. Space Complexity (if applicable)
7. Beginner-friendly explanation

Code:

{code}

Return the answer in Markdown.

---

# 5. Find Bugs Prompt

Purpose

Detect logical and syntax issues.

Template

You are an experienced software code reviewer.

Review the following {language} code.

Identify:

- Syntax Errors
- Runtime Errors
- Logical Errors
- Edge Cases
- Security Problems
- Performance Problems

If no bugs exist, clearly state that.

Code:

{code}

Return the answer in Markdown.

---

# 6. Improve Code Prompt

Purpose

Suggest better coding practices.

Template

Review the following {language} code.

Suggest improvements for:

- Readability
- Naming
- Structure
- Maintainability
- Best Practices

Do not rewrite the entire code unless necessary.

Code:

{code}

---

# 7. Optimize Code Prompt

Purpose

Improve performance.

Template

Optimize the following {language} code.

Analyze:

- Time Complexity
- Space Complexity
- Better Algorithms
- Memory Usage
- Performance Improvements

Provide optimized code if possible.

Code:

{code}

---

# 8. Generate Documentation Prompt

Purpose

Generate project documentation.

Template

Generate professional documentation for the following {language} code.

Include:

Overview

Functions

Parameters

Return Values

Example Usage

Notes

Code:

{code}

Return Markdown.

---

# 9. Generate Test Cases Prompt

Purpose

Generate unit tests.

Template

Generate unit test cases for the following {language} code.

Include:

Normal Cases

Boundary Cases

Invalid Inputs

Edge Cases

Expected Outputs

Code:

{code}

Return Markdown.

---

# 10. Prompt Rules

Every prompt must:

Mention programming language

Mention user code

Mention expected format

Use Markdown

Avoid hallucination

Never invent missing code

---

# 11. Response Style

Responses should be:

Professional

Simple

Well Structured

Markdown

Readable

Actionable

---

# 12. Future Prompts

Security Review

Performance Review

Code Smell Detection

Complexity Analysis

Duplicate Code Detection

AI Refactoring

GitHub Repository Review

ZIP Project Review

Architecture Review

Database Review

API Review

Frontend Review

Backend Review

---

# 13. Prompt Folder Structure

backend/

app/

prompts/

│

├── explain.py

├── bugs.py

├── improve.py

├── optimize.py

├── docs.py

├── tests.py

├── security.py          (Future)

├── performance.py       (Future)

├── complexity.py        (Future)

├── refactor.py          (Future)

└── github.py            (Future)

---

# 14. Prompt Engineering Guidelines

Keep prompts focused.

One task per prompt.

Avoid combining unrelated tasks.

Use clear instructions.

Specify desired output format.

Ask AI not to assume missing information.

Prefer deterministic and structured responses.

---

# 15. Future Enhancements

Prompt Versioning

Dynamic Prompt Builder

User-defined Prompt Templates

Custom Prompt Settings

Few-shot Examples

Context-aware Prompting

Conversation Memory

Multi-model Prompt Support