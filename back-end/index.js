const express=require('express')
require('./config/db')
require('dotenv').config();
const app=express()


const User=require("./models/UserModel")
const UserRoutes=require('./routes/UserRoutes')
app.use(express.json())

app.use(UserRoutes)

app.get("/",(req,res)=>{
    res.json("Hello World!")
})




app.listen(5000,()=>{
    console.log("Server Listening at port 5000")
})