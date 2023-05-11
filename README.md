<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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
```
