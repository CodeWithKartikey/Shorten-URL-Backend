# Shorten URL App

## Description
Shorten URL App is a backend API built using Node.js and Express.js. It serves as the backend for the Shorten URL web application, allowing users to shorten long URLs effectively and easily.

## Features
- Shorten long URLs to manageable links.
- Retrieve original URLs from shortened links.
- Basic input validation and error handling.
- Integration with MongoDB for data storage.

## Tech Stack
- Node.js: JavaScript runtime for running server-side code.
- Express.js: Backend framework for handling HTTP requests and responses.
- MongoDB: NoSQL database for storing URL mappings.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```bash
   cd shorten-url-app/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
1. Create a `.env` file in the root of the `backend` directory.
2. Add the following environment variables:
   ```env
   PORT=<port-number>
   MONGODB_URI=<your-mongodb-connection-string>
   FRONTEND_URL=<your-frontend-url>
   ```

## Usage
1. Start the backend server:
   ```bash
   npm start
   ```
2. The backend API will be accessible at `http://localhost:8080`.

## Backend Structure
- `server.js`: Entry point of the backend application.
- `config/db.config.js`: Configuration file for connecting to MongoDB.
- `controllers/shortenUrlLink.controller.js`: Controller functions for handling URL shortening and retrieval.
- `models/shortenUrlLink.Model.js`: Mongoose model definition for storing URL mappings.
- `routes/shortenUrl.routes.js`: Express router for defining URL shortening endpoints.
- `middlewares/errorHandler.middleware.js`: Middleware for handling 404 Not Found errors.

## Dependencies
- Express.js: Backend framework for handling HTTP requests and responses.
- Mongoose: MongoDB object modeling tool for Node.js.
- Shortid: Module for generating short IDs.
- Validator: Module for URL validation.
- Dotenv: Module for loading environment variables from `.env` file.
- Morgan: HTTP request logger middleware for Node.js.
- Cors: Middleware for enabling CORS in Express.js.

## Contribution
Contributions are welcome! Feel free to open issues or submit pull requests to contribute to the development of the Shorten URL App backend.

## License
This project is licensed under the MIT License.

---
Feel free to customize this README file according to your project's specific requirements and additional features. Happy coding.🚀