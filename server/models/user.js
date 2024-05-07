import mongoose from "mongoose";

const User = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
    }
},{timestamps:true});

const user = mongoose.model("User",User);

export default user;