import React,{Component} from "react";
import Logo from '../../component/logo/logo.js'
import {List,InputItem,Radio,WingBlank,Button,WhiteSpace} from 'antd-mobile'
const RadioItem=Radio.RadioItem;
class Register extends Component{
    constructor(){
        super();
        this.state={
            user:'',
            pwd:'',
            repwd:'',
            type:'genuis',
        }
        this.handleregister=this.handleregister.bind(this);
        }
    handleChange=(key,value)=>{
        this.setState({
            [key]:value
        })
    }
    handleregister(){
        console.log(this.state);
    }
     render(){
         return (
             <div>
                 <Logo />
                 <List>
                     <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
                     <WhiteSpace />
                     <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                     <WhiteSpace />
                     <InputItem type="password" onChange={v=>this.handleChange('repwd',v)}>确定密码</InputItem>
                     <RadioItem checked={this.state.type==='genuis'} onChange={()=>this.handleChange("type","genuis")}>牛人</RadioItem>
                     <RadioItem checked={this.state.type==='boss'} onChange={()=>this.handleChange("type","boss")}>boss</RadioItem>
                 </List>
                 <WhiteSpace />
                 <Button type="primary" onClick={this.handleregister}>注册</Button>
             </div>
         )
     }
 }
 export default Register
