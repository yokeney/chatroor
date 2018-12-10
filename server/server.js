const express=require('express');
const userRouter=require('./user');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const app=express();
app.use(bodyParser.json())
app.use(cookieParser())
app.use("/user",userRouter)
app.listen(9000,()=>{
    console.log("连接成功");
})
