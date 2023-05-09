# NestJS Bookmarks API

This project is a bookmarks API built from scratch using NestJS, Docker, PostgreSQL, PassportJS, Prisma, Pactum, and dotenv. It includes end-to-end tests and uses modern web development techniques to ensure the API is scalable and maintainable.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This API allows users to create, read, update, and delete bookmarks. Users can sign up and sign in using their email and password or with Google OAuth. JWT tokens are used to authenticate and authorize requests. The API uses Prisma as the ORM and PostgreSQL as the database.

## Features

- User sign up and sign in with email and password or with Google OAuth
- JWT tokens for authentication and authorization
- CRUD operations for bookmarks
- End-to-end tests using Pactum

## Technologies Used

- NestJS
- Docker
- PostgreSQL
- PassportJS
- Prisma
- Pactum
- dotenv

## Installation and Setup

1. Clone the repository:

```
git clone https://github.com/your-username/nestjs-bookmarks-api.git
```

2. Install the dependencies:

```
npm install
```

3. Set up the PostgreSQL database in Docker:

```
docker-compose up -d
```

4. Create the database schema:

```
npx prisma migrate dev
```

5. Create a `.env` file and add the necessary environment variables:

```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/nestjs_bookmarks_api
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-jwt-secret
```

6. Start the server:

```
npm run start:dev
```

## Usage

### Endpoints

#### POST /auth/signup

Create a new user.

Request body:

```
{
  "email": "example@gmail.com",
  "password": "password123"
}
```

Response body:

```
{
  "id": 1,
  "email": "example@gmail.com",
  "createdAt": "2023-05-09T12:00:00.000Z",
  "updatedAt": "2023-05-09T12:00:00.000Z"
}
```

#### POST /auth/signin

Sign in as a user.

Request body:

```
{
  "email": "example@gmail.com",
  "password": "password123"
}
```

Response body:

```
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYyMzEwNTg4NywiZXhwIjoxNjIzMTA5NDg3fQ.36ixIJKg56xu2wFzDlH10V7dN5edibpN7Gz5Y5MH5mg"
}
```

#### POST /auth/google

Sign in with Google OAuth.

Response body:

```
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYyMzEwNTg