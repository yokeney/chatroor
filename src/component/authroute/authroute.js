import React,{Component} from "react";
import axios from 'axios';
 export default class AuthRoute extends Component{
     componentDidMount(){
         // 获取用户信息
         // 是否登陆
         axios.get("/user/info").then((res)=>{
             if(res.status===200){
                 console.log(res.data);
             }
         })
     }
     render(){
         return (
                <p>chiose</p>
         )
     }
 }
