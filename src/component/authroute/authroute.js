import React,{Component} from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {loaddata} from '../../redux/user.redux.js'
import {connect} from 'react-redux'
@withRouter
@connect(
    state=>state.user,
    {loaddata}
)
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
                     this.props.loaddata(res.data.data)
                 }
                 else{
                     this.props.history.push('/login');
                 }
             }
         })
     }
     render(){
         return null
     }
 }
 export default AuthRoute
