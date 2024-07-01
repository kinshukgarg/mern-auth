import User from '../models/users.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../util/error.js'
export const Signup= async (req,resp,next) =>{
    const {username,email,password}=req.body
    //hasync is synchronised thats why we use sync 
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser= new User({username,email,password:hashedPassword})
     try {
        await newUser.save()
     resp.status(201).json({message:"New account is made "})
     } catch (error) {
        next(error)
     }
     
     
}