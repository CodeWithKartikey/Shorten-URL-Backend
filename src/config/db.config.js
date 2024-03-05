// Importing Mongoose library
import mongoose from "mongoose";

// Setting 'strictQuery' to false to allow for more flexible querying
mongoose.set('strictQuery', false);

// Function to connect to MongoDB
const connectMongoDB = async () => {
    try {
        // Attempting to establish a connection to MongoDB
        const connectionResult = await mongoose.connect(process.env.MONGODB_URI);

        // If connection is successful, log the host information
        if (connectionResult) {
            console.log(`Connected to MongoDB : ${connectionResult.connection.host}`);
        }
    } catch (error) {
        // If an error occurs while connecting, log the error and exit the process
        console.error('Error connecting to MongoDB :', error);
        process.exit(1);
    }  
};

// Exporting the connectMongoDB function to be used elsewhere
export default connectMongoDB;
