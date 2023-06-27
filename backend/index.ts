import express from "express";
import cors from "cors";
import 'dotenv/config';
import "./models/dbConn"
const app=express();
app.use(cors())
app.use(express.json());


app.listen(process.env.PORT,()=>{
    console.log("port running on ",`${process.env.PORT}`)
});