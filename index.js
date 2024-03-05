// Importing required modules
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotConfig from 'dotenv';

// Importing MongoDB connection configuration
import connectMongoDB from './config/db.config.js';

// Importing Shorten URL routes
import ShortenUrlRoutes from './routes/shortenUrl.routes.js';

// Loading environment variables from .env file
dotConfig.config();

// Creating an Express application instance
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Setting up CORS middleware
app.use(cors({
  origin: '*',
  credentials: true
}));

// Setting up Morgan for logging HTTP requests
app.use(morgan('dev'));

// Setting up routes for Shorten URL endpoints
app.use('/api/v1', ShortenUrlRoutes);

// Handling 404 Not Found errors
app.all('*', (req, res) => {
  res
  .status(404)
  .send("Oops! 404 Page not found.");
});

// Defining the port number
const PORT = 8080;

// Starting the server
app.listen(PORT, async () => {
  // Connecting to MongoDB
  await connectMongoDB();
  console.log(`App is running at http://localhost:${PORT}/.`);
});

// Exporting the Express app instance
export default app;
