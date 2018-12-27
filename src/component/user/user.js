import React,{Component} from "react";
import {connect} from 'react-redux';
import {Result,List,WhiteSpace,Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import './index.css'
@connect(
    state=>state.user,
    {}
)

class User extends React.Component{
    constructor(){
        super();
        this.handleLyout=this.handleLyout.bind(this);
    }
    handleLyout(){
        const alert=Modal.alert;
        console.log('lyout');
        const alertInstance = alert('Delete', 'Are you sure???', [
    {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
          style: 'default'
    },
    { text: 'OK',
      onPress: () => {
        browserCookie.erase('userid');
        window.location.href=window.location.href;
    } },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);

    }
    render(){
        const props=this.props;
        const Item=List.Item;
        const Brief=Item.Brief;
        console.log(this.props);
        return props.user?(
            <div>
                <Result
                img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width:20}} alt=""/>}
                title={this.props.title}
                message={props.type==='boss'?props.company:null}
                >
                </Result>
                <List renderHeader={()=>"简介"}>
                     <Item>{props.title}</Item>
                     {props.desc.split('\n').map(d=>(
                         <Brief style={{paddingLeft:15}} key>{d}</Brief>
                     ))}
                     {
                         props.money? <Brief style={{paddingLeft:15}}>{props.money}</Brief>:null
                     }
                </List>
                <WhiteSpace></WhiteSpace>
                <List >
                    <Item onClick={this.handleLyout} className="layout">注销</Item>
                </List>
            </div>
        ):null
    }
}
export default User
