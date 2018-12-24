import React,{Component} from "react";
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import axios from 'axios';
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chartuser.redux.js';
@connect(
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
         const data=this.props.userList;
         console.log(data);
         const CardHeader=Card.Header;
         const CardBody=Card.Body;
         return (
             <WingBlank>
                {
                    this.props.userList.map(v=>(
                        v.avatar?<Card style={{marginTop:12}}>
                        <CardHeader
                            key={v._id}
                            title={v.title}
                            extra={<span>this is extra</span>}
                            thumb={require(`../img/${v.avatar}.png`)}
                        >
                        </CardHeader>
                        <CardBody>
                            {v.desc.split('\n').map(v=>(
                                <div key>{v}</div>
                            ))}
                        </CardBody>

                        </Card>:null
                    ))
                }
             </WingBlank>
         )
     }
 }
 export default Boss
