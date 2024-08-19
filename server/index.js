import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGO_URL =process.env.MONGO_URL


const app =express();
app.use(express.json());
app.use(cors());

const dbConnection = async()=>{
    const conn = await mongoose.connect(MONGO_URL);
    if(conn){
        console.log("MongoDB Connected Successfully!");
    }
    else{
        console.log("MongoDB  Not Connected");
    }
}
dbConnection();




app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})


