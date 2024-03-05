// Importing the Schema and model modules from Mongoose
import { Schema, model } from "mongoose";

// Defining the schema for the shortened URL
const shortenUrlSchema = new Schema(
    {
        // Field for the short URL Link field
        shortUrlLink: { 
            type: String, 
            required: true,
            lowercase: true,
        },
        // Field for the long URL Link field
        longUrlLink: { 
            type: String, 
            required: true,
            lowercase: true
        }
    }, 
    // Options for the schema
    { timestamps: true }
);

// Adding indexes to the schema
shortenUrlSchema.index({ shortUrlLink: 1 }, { unique: true });
shortenUrlSchema.index({ longUrlLink: 1 });

// Creating a Mongoose model based on the schema
const shortenUrlDatabase = model('ShortenUrl', shortenUrlSchema);

// Exporting the model for use in other files
export default shortenUrlDatabase;
