import React,{Component} from "react";
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import axios from 'axios';
import {connect} from 'react-redux'
import Usercard from '../usercard/usercard.js'
import {getUserList} from '../../redux/chartuser.redux.js';
@connect(
    /*state后面是每个redux里的state模块*/
    state=>state.chatuser,
    {getUserList}
)
  class Genius extends Component{
     componentDidMount(){
         this.props.getUserList('boss');
     }
     render(){
         const data=this.props.userList;
         const CardHeader=Card.Header;
         const CardBody=Card.Body;
         return (
             <Usercard userList={this.props.userList}></Usercard>
         )
     }
 }
 export default Genius
