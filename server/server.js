const express=require('express');
const mongoose=require("mongoose");
//连接mongo
const DB_URL='mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on("connected",()=>{
    console.log("success");
})
// 类似于mysql表
const User=mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age: {type:Number,require:true}
}))
//新增数据
// User.create({
//     name:'yssoke',
//     age:09
// },(err,res)=>{
//     if(!err){
//         console.log(res);
//     }
//     else{
//         console.log(err);
//     }
// })

const app=express();
app.get('/',(req,res)=>{
    res.send("<h1>Helloa</h1>")
})
app.get("/data",(req,res)=>{
    User.findOne({},(err,doc)=>{
        res.json(doc)
    })
})
app.listen(9000,()=>{
    console.log("连接成功");
})
