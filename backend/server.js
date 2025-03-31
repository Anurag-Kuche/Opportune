import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from "./routes/posts.routes.js";
// import userRoutes from "./routes/user.routes.js";


dotenv.config();

const app=express();
app.use(cors());

app.use(postRoutes);
app.use(express.json());


const start=async()=>{
    const connectDB=await mongoose.connect("mongodb+srv://proconnect.a06w5ea.mongodb.net/ --apiVersion 1 --username anuragkuche95")
    app.listen(9090,()=>{
        console.log("Server is Running on port 9090")
    })
}
start();