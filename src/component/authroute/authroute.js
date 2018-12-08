import React,{Component} from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
@withRouter
  class AuthRoute extends Component{
     componentDidMount(){
         const publicList=['/login','/register'];
         const pathname=this.props.location.pathname;
         console.log(pathname);
         if(publicList.indexOf(pathname)>-1){
             return null
         }
         // 获取用户信息
         // 是否登陆
         axios.get("/user/info").then((res)=>{
             if(res.status===200){
                 if (res.data.code==0) {
                 }
                 else{
                     this.props.history.push('/login');
                 }
             }
         })
     }
     render(){
         return (
                <p>chioseeee</p>
         )
     }
 }
 export default AuthRoute