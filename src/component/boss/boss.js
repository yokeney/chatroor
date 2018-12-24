import React,{Component} from "react";
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import axios from 'axios';
  class Boss extends Component{
 constructor(){
     super();
     this.state={
         data:[]
        }
     }
     componentDidMount(){
         axios.get('/user/list?type=genuis').then(res=>{
             if(res.data.code===0){
                 this.setState({data:res.data.data})
             }
         })
     }
     render(){
         const data=this.state.data;
         console.log(data);
         const CardHeader=Card.Header;
         const CardBody=Card.Body;
         return (
             <WingBlank>
                {
                    this.state.data.map(v=>(
                        v.avatar?<Card style={{marginTop:10}}>
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
