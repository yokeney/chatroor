import React,{Component} from "react";
import Logo from '../../component/logo/logo.js'
import {List,InputItem,WingBlank,Button,WhiteSpace} from 'antd-mobile'
import AuthRoute from '../../component/authroute/authroute.js'
  class Login extends Component{
      constructor(){
          super();
          this.register=this.register.bind(this);
          }
          register(){
              this.props.history.push('./register')
          }
     render(){
         return (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <WhiteSpace />
                        <InputItem>密码</InputItem>
                    </List>
                    <Button type="primary">登陆</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
         )
     }
 }
 export default Login
