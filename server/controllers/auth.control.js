import express from "express";
import user from "../models/user.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const SignUp = async (req, res, next)=> {
  const { username, email, password } = req.body
  const hashPassword = bcryptjs.hashSync(password , 10)
  const User = new user({ username, email, password : hashPassword });
  try {
    await User.save();
    res.status(200).json({message:"user created successfully"});
  } catch (error) {
    next(error)
    // next(errorhandler(300,'something went wrong')) 
    // res.status(500).json(error.message)
  }
}

export const SignIn = async (req, res, next)=>{
  const {email, password} = req.body
  const validUser = await user.findOne({email});
  if(!validUser) return res.json(next(errorhandler(404,'User Not Found')));
  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if(!validPassword) return res.json(next(401,'Invalid Credentials'))
  const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
  const {password : hashPassword, ...rest} = validUser._doc;
  const expiryDate = new Date(Date.now() + 3600000 );
  res
    .cookie('access_token', token , {httpOnly:true, expires:expiryDate} )
    .status(200)
    .json(rest)
}

