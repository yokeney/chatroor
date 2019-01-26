import React,{Component} from "react";
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
         return (
             <Usercard userList={this.props.userList}></Usercard>
         )
     }
 }
 export default Genius
