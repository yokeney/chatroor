import React from 'react';
import PropTypes from 'prop-types';
import {Card,WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom';
@withRouter
class Usercard extends React.Component{
    static PropTypes={
        userList:PropTypes.array.isRequired
    }
    handleClick(v){
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        const CardHeader=Card.Header;
        const CardBody=Card.Body;
        return(
            <WingBlank>
               {
                   this.props.userList.map(v=>(
                       v.avatar?<Card key={v._id} style={{marginTop:12,zIndex:999}}
                        onClick={()=>this.handleClick(v)}
                        >
                       <CardHeader
                           key={v._id}
                           title={v.title}
                           extra={<span>{v.avatar}</span>}
                           thumb={require(`../img/${v.avatar}.png`)}
                       >
                       </CardHeader>
                       <CardBody>
                       {v.type==='boss'?<div>公司：{v.company}</div>:null}
                           {v.desc.split('\n').map(d=>(
                               <div key={d}>{d}</div>
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
