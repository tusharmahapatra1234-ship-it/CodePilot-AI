class ReviewPrompts:

    # ==========================
    # Explain Code
    # ==========================

    @staticmethod
    def explain(code: str, language: str) -> str:
        return f"""
You are a senior software engineer.

Explain the following {language} code in simple language.

Requirements:
- Explain line by line.
- Mention the purpose of each important statement.
- Explain functions, classes, variables and logic.
- Keep it beginner-friendly.
- Use Markdown headings and bullet points.
- End with a short summary.

Code:
{code}
"""

    # ==========================
    # Find Bugs
    # ==========================

    @staticmethod
    def bugs(code: str, language: str) -> str:
        return f"""
You are a senior software engineer.

Analyze the following {language} code.

Identify:

- Syntax Errors
- Runtime Errors
- Logical Errors
- Possible Exceptions
- Bad Coding Practices
- Security Problems (if any)

For every issue provide:

1. Problem
2. Reason
3. Solution

Return the result using Markdown.

Code:
{code}
"""

    # ==========================
    # Improve Code
    # ==========================

    @staticmethod
    def improve(code: str, language: str) -> str:
        return f"""
You are a senior software engineer.

Improve the following {language} code.

Your response must include:

## Improved Code

## Changes Made

## Best Practices Used

## Why this version is better

Use clean, production-ready code.

Code:
{code}
"""

    # ==========================
    # Optimize Code
    # ==========================

    @staticmethod
    def optimize(code: str, language: str) -> str:
        return f"""
You are a senior software engineer.

Optimize the following {language} code.

Focus on:

- Faster execution
- Lower memory usage
- Better readability
- Better algorithm
- Remove unnecessary operations

Return:

## Optimized Code

## Improvements

## Time Complexity

## Space Complexity

## Performance Comparison

Code:
{code}
"""

    # ==========================
    # Documentation
    # ==========================

    @staticmethod
    def docs(code: str, language: str) -> str:
        return f"""
You are a senior software engineer.

Generate professional documentation for the following {language} code.

Include:

# Overview

# Function/Class Name

# Purpose

# Description

# Parameters

# Return Value

# Example Usage

# Notes

Use Markdown formatting.

Code:
{code}
"""

    # ==========================
    # Generate Unit Tests
    # ==========================

    @staticmethod
    def tests(code: str, language: str) -> str:
        return f"""
You are a senior software engineer.

Generate professional unit tests for the following {language} code.

Requirements:

- Use the standard testing framework for {language}.
- Cover normal test cases.
- Cover edge cases.
- Cover invalid inputs.
- Cover exception handling.
- Add comments explaining each test.
- Return only production-quality test code.

Also include:

## Test Strategy

## Expected Output

Code:
{code}
"""