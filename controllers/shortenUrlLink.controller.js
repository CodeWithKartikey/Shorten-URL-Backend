// Importing necessary modules and dependencies
import shortid from 'shortid'; // Module for generating short IDs
import validator from 'validator'; // Module for URL validation

// Importing model
import shortenUrlDatabase from "../models/shortenUrlLink.model.js"; //

/*
  Handles requests to shorten URLs.
  @param {Object} req - The request object.
  @param {Object} res - The response object.
*/

const sendRequestForShortenUrl = async (req, res) => {
    try {
        const { longUrlLink } = req.body;

        // Basic input validation
        if (!longUrlLink || !validator.isURL(longUrlLink)) {
            return res.status(400).json({
                success: false,
                message: 'Post - Please provide a valid long URL.'
            });
        }

        // Check if the long URL already exists (optional optimization)
        const existingUrlLink = await shortenUrlDatabase.findOne({ longUrlLink });
        if (existingUrlLink) {
            return res.status(200).json({
                success: true,
                shortUrlLink: existingUrlLink.shortUrlLink
            });
        } else {
            // Generate a new short URL and save it to the database
            let shortUrlLink = shortid.generate().substring(0, 6);

            // Check if the generated short URL already exists in the database
            while (await shortenUrlDatabase.findOne({ shortUrlLink })) {
                shortUrlLink = shortid.generate().substring(0, 6);
            }

            const newUrlLink = await shortenUrlDatabase.create({ shortUrlLink, longUrlLink });
            res.status(201).json({
                success: true,
                shortUrlLink: newUrlLink.shortUrlLink,
                longUrlLink: newUrlLink.longUrlLink
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Post - Failed to shorten URL, please try again later.'
        });
    }
};

/*
  Handles requests to retrieve the original URL from the short URL.
  @param {Object} req - The request object.
  @param {Object} res - The response object.
*/

const getRequestForShortenUrl = async (req, res) => {
    try {
        const { shortUrlLink } = req.params;

        // Find the short URL in the database
        const mapShortUrlLink = await shortenUrlDatabase.findOne({ shortUrlLink });
        if (mapShortUrlLink) {
            // If short URL link is found, send the long URL link to the frontend
            res.status(200).json({
                success: true,
                longUrlLink: mapShortUrlLink.longUrlLink
            });
        } else {
            // If short URL is not found, return a 404 error
            res.status(404).json({
                success: false,
                message: 'Get - URL is not found, please try again later.'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Get - Failed to retrieve URL, Please try again later.'
        });
    }
};

// Exporting functions for use as controllers
export { sendRequestForShortenUrl, getRequestForShortenUrl };
