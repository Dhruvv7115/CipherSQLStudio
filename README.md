# CipherSQLStudio

A browser-based SQL learning platform where students can practice SQL queries against pre-configured assignments with real-time execution and intelligent hints.

## Features

- Browse SQL assignments by difficulty (Easy, Medium, Hard)
- View pre-loaded table schemas and sample data
- Write and execute SQL queries in a Monaco Editor
- See query results in real-time
- Get intelligent hints from an LLM without revealing the full solution

## Tech Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Frontend       | React.js + SCSS         |
| Backend        | Node.js + Express.js    |
| Sandbox DB     | PostgreSQL (via Docker) |
| Persistence DB | MongoDB (Atlas)         |
| Code Editor    | Monaco Editor           |
| LLM            | Gemini API              |

## Project Structure

```
ciphersqlstudio/
├── frontend/        # React app
├── backend/         # Express server
└── README.md
```

## Prerequisites

- Node.js v18+
- Docker (for PostgreSQL)
- MongoDB Atlas account
- Gemini API key

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ciphersqlstudio.git
cd ciphersqlstudio
```

### 2. Start PostgreSQL with Docker

```bash
docker run --name ciphersql-postgres \
  -e POSTGRES_PASSWORD=yourpassword \
  -e POSTGRES_DB=ciphersql_sandbox \
  -p 5432:5432 \
  --restart always \
  -d postgres
```

### 3. Seed the PostgreSQL database

Connect to your database using pgAdmin or psql and run the SQL in `backend/seed/tables.sql` to create and populate the sample tables.

### 4. Backend setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your .env values
npm start
```

### 5. Frontend setup

```bash
cd frontend
npm install
cp .env.example .env
# Fill in your .env values
npm start
```

### 6. Seed MongoDB

Use MongoDB Atlas UI or Compass to insert the assignment documents from `backend/seed/assignments.json` into your `assignments` collection.

## Environment Variables

### Backend `.env`

```
PORT=5000
POSTGRES_URL=postgresql://postgres:yourpassword@localhost:5432/ciphersql_sandbox
MONGO_URI=your_mongodb_atlas_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

## API Endpoints

| Method | Endpoint                       | Description                  |
| ------ | ------------------------------ | ---------------------------- |
| GET    | `/api/assignments`             | Fetch all assignments        |
| GET    | `/api/assignments/:id`         | Fetch single assignment      |
| GET    | `/api/tables?tables=tableName` | Fetch schema and sample rows |
| POST   | `/api/execute`                 | Execute a SQL query          |
| POST   | `/api/hint`                    | Get an LLM hint              |

## Security

User-submitted SQL queries are validated before execution:

- Empty queries are rejected
- Destructive keywords (`DROP`, `DELETE`, `INSERT`, `UPDATE`, `ALTER`, `TRUNCATE`) are blocked
- Only `SELECT` queries are permitted

## Technology Choices

- **React.js** — Component-based UI, great ecosystem, easy state management for dynamic panels
- **SCSS** — Variables, nesting, and mixins for maintainable mobile-first responsive styles
- **Express.js** — Lightweight and flexible, ideal for building REST APIs quickly
- **PostgreSQL** — Robust relational database needed to actually execute student SQL queries
- **MongoDB** — Flexible document store for assignment metadata which doesn't need relational structure
- **Monaco Editor** — The same editor that powers VS Code, provides SQL syntax highlighting out of the box
- **Gemini API** — Free tier available, fast responses, easy to integrate for hint generation
