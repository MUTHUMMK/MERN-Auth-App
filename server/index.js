import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from './routes/user.route.js';
import AuthRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO)
try {
    console.log("mongodb connected");
} catch (error) {
    console.log(error);
}

app.listen(3000,()=>{
    console.log("server is connected 3000");
});


app.use('/api/user',UserRouter)
app.use('/api/auth',AuthRouter)