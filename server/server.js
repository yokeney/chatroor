const express=require('express');
const userRouter=require('./user');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const model = require('./model')
const Chat = model.getModel('chat')
//work with express
const app=express();
const server=require('http').Server(app);
const io=require('socket.io')(server);
io.on('connection',function(socket){
    socket.on("sendmsg",function(data){
        const {from,to,msg}=data;
        const chatid=[from,to].sort().join('_');
        console.log({from,to,msg});
        Chat.create({chatid,from,to,content:msg},function(err,doc){
            io.emit('recmsg',Object.assign({},doc._doc))
        })
        // console.log(data);
        // io.emit("recmsg",data)
    })
})
app.use(bodyParser.json())
app.use(cookieParser())
app.use("/user",userRouter)
server.listen(9000,()=>{
    console.log("连接成功");
})
