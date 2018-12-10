import React,{Component} from "react";
import Logo from '../../component/logo/logo.js'
import {List,InputItem,WingBlank,Button,WhiteSpace} from 'antd-mobile'
import AuthRoute from '../../component/authroute/authroute.js'
import {login} from '../../redux/user.redux.js';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
@connect(
    state=>state.user,
    {login}
)
  class Login extends Component{
      constructor(){
          super();
          this.register=this.register.bind(this);
          this.handleLogin=this.handleLogin.bind(this);
          this.state={
              user:'',
              pwd:''
            }
          }
          register(){
              this.props.history.push('./register')
          }
          handleChange(key,value){
              this.setState({
                  [key]:value
              })
          }
          handleLogin(){
              this.props.login(this.state);
          }
     render(){
         return (
            <div>
            {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <Logo />
                <WingBlank>
                    <List>
                        {this.props.msg?<p className="error">{this.props.msg}</p>:null}
                        <InputItem onChange={v=>this.handleChange("user",v)}>用户名</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={v=>this.handleChange("pwd",v)}>密码</InputItem>
                    </List>
                    <Button type="primary" onClick={this.handleLogin}>登陆</Button>
                    <WhiteSpace />
                    <Button  type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
         )
     }
 }
 export default Login
