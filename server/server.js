const express=require('express');
const userRouter=require('./user');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
//work with express
const app=express();
const server=require('http').Server(app);
const io=require('socket.io')(server);
io.on('connection',function(socket){
    socket.on("sendmsg",function(data){
        console.log(data);
        io.emit("recmsg",data)
    })
})
app.use(bodyParser.json())
app.use(cookieParser())
app.use("/user",userRouter)
server.listen(9000,()=>{
    console.log("连接成功");
})
