import React,{Component} from "react";
import Logo from '../../component/logo/logo.js'
import {List,InputItem,Radio,WingBlank,Button,WhiteSpace} from 'antd-mobile'
import {register} from '../../redux/user.redux.js'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import imoocForm from '../../component/imooc.form/imooc.form.js'
import "./index.css"
@connect(
    state=>state.user,
    {register}
)
@imoocForm
class Register extends Component{
    constructor(){
        super();
        this.handleregister=this.handleregister.bind(this);
    }
    componentDidMount(){
        this.props.handleChange('type',"genuis")
    }
    handleregister(){
        this.props.register(this.props.state);
        console.log(this.state);
    }
     render(){
         const RadioItem=Radio.RadioItem;
         return (
             <div>
             {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                 <Logo />
                 <List>
                     {this.props.msg?<p className="error">{this.props.msg}</p>:null}
                     <InputItem onChange={v=>this.props.handleChange('user',v)}>用户名</InputItem>
                     <WhiteSpace />
                     <InputItem type="password" onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                     <WhiteSpace />
                     <InputItem type="password" onChange={v=>this.props.handleChange('repwd',v)}>确定密码</InputItem>
                     <RadioItem checked={this.props.state.type==='genuis'} onChange={()=>this.props.handleChange("type","genuis")}>牛人</RadioItem>
                     <RadioItem checked={this.props.state.type==='boss'} onChange={()=>this.props.handleChange("type","boss")}>boss</RadioItem>
                 </List>
                 <WhiteSpace />
                 <Button type="primary" onClick={this.handleregister}>注册</Button>
             </div>
         )
     }
 }
 export default Register
