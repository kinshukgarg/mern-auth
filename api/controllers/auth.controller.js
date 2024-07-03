import User from '../models/users.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../util/error.js';
import jwt from 'jsonwebtoken';

export const Signup = async (req, resp, next) => {
    const { username, email, password } = req.body;
    // hashSync is synchronous, hence we use sync
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        resp.status(201).json({ message: "New account is made " });
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));
        
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));
        
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const {password:hashedPassword,...rest}=validUser._doc;

        res.cookie('acces_token', token, { httpOnly: true,expires: new Date(Date.now() + 3600000) }).status(200).json(rest)

        
        
    } catch (error) {
        next(error);
    }
};
