# Database Design

Project: CodePilot AI

Version: 1.0

Author: Tushar Mahapatra

Database Status: Planned (Version 2)

---

# 1. Overview

Version 1 of CodePilot AI does not require a database.

The application is stateless:

User → API → Gemini AI → Response

No user information or review history is stored.

From Version 2 onwards, a database will be introduced to support user accounts, review history, and analytics.

---

# 2. Database Evolution

Version 1

No Database

↓

Version 2

SQLite

↓

Version 3+

PostgreSQL (Recommended)

Alternative

MongoDB (Optional)

---

# 3. Why SQLite First?

Advantages

- Zero configuration
- Lightweight
- Beginner friendly
- Fast local development
- Easy backup

Suitable for

- Authentication
- Review History
- User Preferences

---

# 4. Why PostgreSQL Later?

Advantages

- Production ready
- ACID compliant
- Better scalability
- Excellent FastAPI support
- Rich querying capabilities

Suitable for

- Multiple users
- Analytics
- Reports
- Team collaboration

---

# 5. Database Schema

Main Tables

Users

Reviews

Projects

Settings

Future

Notifications

API Keys

Usage Analytics

Sessions

---

# 6. Entity Relationship Diagram

Users
   │
   ├──────────────┐
   │              │
   ▼              ▼
Reviews        Projects
   │
   ▼
AI Reports

---

# 7. Table: Users

Purpose

Store registered users.

Columns

id (UUID)

full_name

email

password_hash

profile_image

preferred_language

theme

created_at

updated_at

status

Constraints

- Email must be unique
- Password stored as hash
- UUID as primary key

---

# 8. Table: Reviews

Purpose

Store AI review history.

Columns

id (UUID)

user_id

language

review_action

source_code

ai_response

processing_time

created_at

Constraints

- user_id references Users.id
- Cascade delete on user removal

---

# 9. Table: Projects

Purpose

Store uploaded ZIP project metadata.

Columns

id (UUID)

user_id

project_name

file_name

language

total_files

upload_date

status

summary

---

# 10. Table: Settings

Purpose

Store user preferences.

Columns

id (UUID)

user_id

theme

editor_font_size

preferred_language

notifications_enabled

updated_at

---

# 11. Future Table: Sessions

Purpose

Track active logins.

Columns

id

user_id

jwt_id

device_name

ip_address

created_at

expires_at

---

# 12. Future Table: Usage Analytics

Purpose

Track platform usage.

Columns

id

user_id

total_reviews

total_projects

average_response_time

last_active

---

# 13. Relationships

Users

1 → Many Reviews

Users

1 → Many Projects

Users

1 → 1 Settings

Users

1 → Many Sessions

---

# 14. Indexing

Create indexes on

email

user_id

created_at

language

review_action

---

# 15. Security

Passwords stored using bcrypt.

Never store plain text passwords.

API keys are stored only in .env, never in the database.

Sanitize all inputs before saving.

---

# 16. Data Retention

Review history can be deleted by the user.

Deleted users remove all associated data.

Future option

Export account data.

---

# 17. Backup Strategy

Development

Manual backup

Production

Daily automated backups

Retention

30 Days

---

# 18. Migration Strategy

Version 1

No Database

↓

Version 2

SQLite

↓

Version 3

PostgreSQL

Migration Tool

Alembic

---

# 19. Future Features

Bookmarks

Favorite Reviews

Review Tags

Folders

Project Categories

Team Workspace

Comments

Review Sharing

Usage Dashboard

---

# 20. Design Principles

Normalized schema

UUID primary keys

Foreign key relationships

Indexed search fields

Scalable architecture

Secure password storage

Easy migration path