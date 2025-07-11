# Express MongoDB Mini Post API

This is a simple RESTful API built with Node.js, Express, and MongoDB (using Mongoose).  
It allows you to create, read, update, and delete (CRUD) "posts"—just like a basic social media app.

## Features

- Create a new post
- Get all posts
- Get a single post by ID
- Update a post
- Delete a post

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Belinda1704/express-mongo-mini-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB (if not already running):
   ```bash
   mongod
   ```

4. Start the server:
   ```bash
   node index.js
   ```

5. The API will be running at `http://localhost:3000/api/posts`

## API Endpoints

- `GET /api/posts` — Get all posts
- `GET /api/posts/:id` — Get a single post by ID
- `POST /api/posts` — Create a new post
- `PUT /api/posts/:id` — Update a post
- `DELETE /api/posts/:id` — Delete a post

## Example Post Object

```json
{
  "name": "My First Post",
  "description": "This is a simple post"
}
```