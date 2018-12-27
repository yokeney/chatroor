import React from 'react';
import PropTypes from 'prop-types';
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
class Usercard extends React.Component{
    static PropTypes={
        userList:PropTypes.array.isRequired
    }
    render(){
        const CardHeader=Card.Header;
        const CardBody=Card.Body;
        return(
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
                       {v.type=='boss'?<div>公司：{v.company}</div>:null}
                           {v.desc.split('\n').map(d=>(
                               <div key>{d}</div>
                           ))}
                       </CardBody>
                       </Card>:null
                   ))
               }
            </WingBlank>
        )
    }
}
export default Usercard
