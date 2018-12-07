import React,{Component} from "react";
import Logo from '../../component/logo/logo.js'
import {List,InputItem,Radio,WingBlank,Button,WhiteSpace} from 'antd-mobile'
const RadioItem=Radio.RadioItem;
class Register extends Component{
    constructor(){
        super();
        this.state={
            type:'genuis'
        }
        }
     render(){
         return (
             <div>
                 <Logo />
                 <List>
                     <InputItem>用户名</InputItem>
                     <WhiteSpace />
                     <InputItem>密码</InputItem>
                     <WhiteSpace />
                     <InputItem>确定密码</InputItem>
                     <RadioItem checked={this.state.type==='genuis'}>牛人</RadioItem>
                     <RadioItem checked={this.state.type==='boss'}>boss</RadioItem>
                 </List>
             </div>
         )
     }
 }
 export default Register
