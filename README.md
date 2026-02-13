# 📘 Project Express – Backend API

Overview
Project Express is a secure and modular backend API built with Express.js and MongoDB. It provides user authentication, protected routes, and full CRUD operations for users and cards. The project follows industry best practices, including centralized error handling, request validation, and environment‑based configuration.

This backend was developed across Sprint 12 & 13, focusing first on core routing and controllers, then expanding into full authentication and security.

# ✨ Features

### Sprint 12 – Core API Structure

- Express server with modular routing

- Controllers for users and cards

- CRUD operations for users and cards

- MongoDB connection with Mongoose

- Request validation using Celebrate/Joi

- Centralized error handling middleware

- Organized project structure following best practices

### Sprint 13 – Authentication & Security

- User registration and login

- Password hashing with bcrypt

- JWT‑based authentication

- Protected routes using auth middleware

- Custom error classes (BadRequest, Unauthorized, Conflict, etc.)

- Duplicate email prevention using unique index

- Database index rebuild to fix duplicate key issues

- All Sprint 13 tests passed successfully

# 🛠 Technologies Used

- Node.js

- Express.js

- MongoDB + Mongoose

- bcrypt

- JSON Web Tokens (JWT)

- dotenv

- Nodemon (dev)

# 📡 API Endpoints

## Auth

### Method -------- Endpoint -------- Description

      POST           /signup           Register a new user
      POST           /signin           Login and receive a JWT

## Users

### Method -------- Endpoint -------- Description

      GET            /users             Register a new user
      GET            /users/:id         Login and receive a JWT
      PATCH          /users/me          Get user by ID
      PATCH          /users/me/avatar   Update avatar

## Cards

### Method -------- Endpoint -------- Description

      GET            /cards             Get all cards
      POST           /cards             Create a new card
      DELETE         /cards/:id         Delete a card
      PUT            /cards/:id/likes   Like a card
      DELETE         /cards/:id/likes   Remove like

# ⚠️ Error Handling

Project Express uses a centralized error system that includes:

- Custom error classes

- MongoDB duplicate key detection

- Default 500 fallback

- Clean, consistent error responses

# 🚀 Installation & Setup

1. Clone the repository:
   git clone <your-repo-url>
2. Install dependencies:
   npm install

3. Create a .env file:
   Include the following variables:

- PORT=3000
- MONGO_URL=mongodb://localhost:27017/project-express
- JWT_SECRET=your-secret-key

4. Start the server:
   npm run dev

# 🧪 Testing

All Sprint 13 tests passed after rebuilding the MongoDB unique index to resolve duplicate email issues.

# 📈 Future Improvements

Add more detailed user profiles

Deploy to a cloud platform

# 🎥 Project Pitch Video

- [Project Pitch Video] (https://drive.google.com/file/d/1LbtZb6h1CVJbh6jBGnBdf3Rt_I27IEHV/view?usp=sharing)

# WTWR (What to Wear?): Back End

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
