import React,{Component} from "react";
import Logo from '../../component/logo/logo.js'
import {List,InputItem,WingBlank,Button,WhiteSpace} from 'antd-mobile'
import AuthRoute from '../../component/authroute/authroute.js'
import {login} from '../../redux/user.redux.js';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import imoocForm from '../../component/imooc.form/imooc.form.js'

//属性代理
// function WrapperHello(Comp){
//     class WrapComp extends Comp{
//         componentDidMount(){
//             console.log('高阶组件生命周期完成');
//         }
//         render(){
//             return Comp
//         }
//     }
    // class WrapComp extends Component{
    //     render(){
    //         return(
    //             <div>
    //                 <p>这是高阶组件</p>
    //                 <Comp name='text' {...this.props}></Comp>
    //             </div>
    //         )
    //     }
    // }
//     return WrapComp;
// }
// @WrapperHello
// class Hello extends Component{
//     render(){
//         return (
//             <h1>hello,i am jack</h1>
//         )
//     }
// }
@connect(
    state=>state.user,
    {login}
)
@imoocForm
class Login extends Component{
  constructor(){
      super();
      this.register=this.register.bind(this);
      this.handleLogin=this.handleLogin.bind(this);
      }
      register(){
          this.props.history.push('./register')
      }

      handleLogin(){
          this.props.login(this.props.state);
      }
 render(){
     return (
        <div>
        {this.props.redirectTo && this.props.redirectTo!=='/login'?<Redirect to={this.props.redirectTo}/>:null}
            <Logo />
            <WingBlank>
                <List>
                    {this.props.msg?<p className="error">{this.props.msg}</p>:null}
                    <InputItem onChange={v=>this.props.handleChange("user",v)}>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem type="password" onChange={v=>this.props.handleChange("pwd",v)}>密码</InputItem>
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
