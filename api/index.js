import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Initialize dotenv to load environment variables from .env file
dotenv.config();

console.log(process.env.MONGO); // This should print the MongoDB URL if the .env file is configured correctly

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

const app = express();

// Listening port 
app.listen(5500, () => {
    console.log("Server listening at 5500");
});
