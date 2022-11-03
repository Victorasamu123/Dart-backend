const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose= require("mongoose");
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT||4000
const URI = process.env.URI
mongoose.connect(URI,(err)=>{
    if(err){
        console.log("error connecting with mongodb")
    }else{
        console.log("connecting with database was successfull")
    }
})
app.listen(()=>{
  console.log(`App is listening at port: ${PORT}`)
})