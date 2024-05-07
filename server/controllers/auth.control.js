import express from "express";
import user from "../models/user.js";
import bcryptjs from "bcryptjs";

export const signup = async (req,res)=> {
  const { username, email, password } = req.body
  const hashPassword = bcryptjs.hashSync(password , 10)
  const User = new user({ username, email, password : hashPassword });
  try {
    await User.save();
    res.status(200).json({message:"user created successfully"});
  } catch (error) {
    res.status(500).json(error.message)
  }
}

