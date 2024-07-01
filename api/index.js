import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'; // Make sure you have this route defined

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
//allows json
app.use(express.json())
// Using router for user routes
app.use("/api/user", userRoutes);

// Using router for auth routes
app.use("/api/auth", authRoutes);

app.use((err,req,res,nex) =>{
    const statusCode=err.statusCode ||500;
    const message=err.message || 'Internal server error'
    return res.status(statusCode).json({
   sucess:false,
   message,
   statusCode,

    });
})




// Listening port 
app.listen(5500, () => {
    console.log("Server listening at 5500");
});
