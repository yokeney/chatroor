import React,{Component} from "react";
import {connect} from 'react-redux'
import Usercard from '../usercard/usercard.js'
import {getUserList} from '../../redux/chartuser.redux.js';
@connect(
    /*state后面是每个redux里的state模块*/
    state=>state.chatuser,
    {getUserList}
)
  class Boss extends Component{
 constructor(){
     super();
     this.state={
         data:[]
        }
     }
     componentDidMount(){
         this.props.getUserList('genuis');
     }
     render(){
         return (
            <Usercard userList={this.props.userList}></Usercard>
         )
     }
 }
 export default Boss
