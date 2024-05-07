import express from "express";
import mongoose from "mongoose";


export const User = (req,res) =>{
    res.json({message:"Api is working"});
}

export default User;