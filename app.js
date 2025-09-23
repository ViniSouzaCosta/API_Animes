import express from "express";
import mongoose from "mongoose";
const app = express();

const port = process.env.PORT || 4000;
app.listen(port, (error) =>{
    if(error){
        console.log(error);
    }
    console.log(`API rondando em http://localhost:${port}`);
});