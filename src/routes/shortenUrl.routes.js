// Importing the Router module from Express
import { Router } from "express";

// Importing controller functions for handling requests
import { getRequestForShortenUrl, sendRequestForShortenUrl } from "../controllers/shortenUrlLink.controller.js";

// Creating a new router instance
const router = Router();

// Route for POST request to shorten URL
// Handler function: sendRequestForShortenUrl
router.post('/shorten-url-link', sendRequestForShortenUrl);

// Route for GET request to retrieve shortened URL
// Handler function: getRequestForShortenUrl
router.get('/:shortUrlLink', getRequestForShortenUrl);

// Exporting the router to be used in other files
export default router;
