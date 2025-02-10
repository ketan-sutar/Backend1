import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}));


app.use(express.json({limit: "10kb"}));

// url encoder
app.use(express.urlencoded({extended:true}));

// used for assests
app.use(express.static("public"));


app.use(cookieParser());


export default app;