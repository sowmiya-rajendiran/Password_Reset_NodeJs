## Postman Documantation
- https://documenter.getpostman.com/view/45904223/2sB3B8tE6T

## 🔐 Password Reset Flow (Node.js)
- This application implements a secure password reset flow in React JS and Node js and MongoDb.

## 🚀 Features and Working Methods 
- 🔐 User Authentication (crypto)
    - Secure registration
    - Passwords hashed using bcrypt
    - crypto for generate random string token generation and verification

- 📩 Forgot & Reset Password
    - Secure reset token generation using crypto
    - Token expiry validation
    - Email reset link with embedded token
    - Password update and token invalidation

- 🔄 MVC Structure
    - Separation of concerns: Routes, Controllers, Models, Utils
    - Easy to scale and maintain

- 🗃️ MongoDB with Mongoose
    - Schema validation
    - Custom methods for user instance (e.g., comparing password, generating tokens)

- 📬 Email Integration (Nodemailer)
    - Sends password reset link to user's email
    - Configurable using environment variables

- 🧪 Validation and Error Handling
    - Input validation using Express/Mongoose

- 🌐 CORS Support
    - Allows frontend apps (e.g., React at localhost:5173) to communicate with the backend

- 🔧 Environment Configuration
    - Uses .env and dotenv for secure and flexible config
    - API URL, Mongo URI, etc.

## 🛠️ Technologies Used
- ⚙️ Node.js – JavaScript runtime for building server-side logic
- 🚀 Express.js – Minimalist web framework for creating RESTful APIs
- 🗃️ MongoDB – NoSQL database used for storing user data
- 🧩 Mongoose – ODM (Object Data Modeling) library for MongoDB and Node.js
- 🔐 bcryptjs – For hashing user passwords securely
- 📩 Nodemailer – For sending password reset emails
- 🕵️‍♂️ crypto – Node.js built-in module for generating secure reset tokens
- 📦 dotenv – Loads environment variables from a .env file
- 🌐 CORS – Middleware to allow cross-origin requests (e.g., React frontend on another port)
- 🧱 MVC Architecture – Structured codebase with clear separation between Routes, Controllers, Models, and Utils
- 🔄 nodemon – For hot-reloading during development

## nodemailer :
    - i am using testemail so sharing for validate
    - https://ethereal.email/
    - 'samara.morissette@ethereal.email'
    - PASS = 'VKF7bd6TU9ST26mp6M'
    - And user sample mail-id for testing - 123456@gmail.com

## Deployed Link
- https://password-reset-nodejs-fb4t.onrender.com