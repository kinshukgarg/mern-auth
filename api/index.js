import express from 'express'
// import monogo db 
//I am using dot env because we added new modules

import mongoose from 'mongoose';
// connecting to mongodb
mongoose.connect("process.env.MONGO")
const app = express();

//listening port 
app.listen(5500,() =>{
    console.log("Server listening at 5500")
})