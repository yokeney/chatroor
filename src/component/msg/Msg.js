import React,{Component} from "react";
import {List} from 'antd-mobile';
import {connect} from 'react-redux';
@connect(
    state=>state
)
 class NavLink extends Component{
 constructor(){
     super();
     }
     getLast(arr){
         return arr[arr.length-1]
     }
     render(){
         const msgGroup={};
         const Item=List.Item;
         const Brief=Item.Brief;
         const userid=this.props.user._id;
         this.props.chat.chatmsg.forEach(v=>{
             msgGroup[v.chatid]=msgGroup[v.chatid] || [];
             msgGroup[v.chatid].push(v);
         })
         // Object.values把对象的值拼成一个数组
         const chatList=Object.values(msgGroup);
         return (
            <div>
                    {chatList.map(v=>{
                        const liastItem=this.getLast(v);
                        const targetid=v[0].from==userid?v[0].to:v[0].from;
                        console.log(targetid);
                        if (!this.props.chat.users[targetid]) {
                            return null
                        }
                        return (
                            <List >
                                <Item
                                 key={liastItem.create_time}
                                 thumb={require(`../img/${this.props.chat.users[targetid].avatar}.png`)}
                                >
                                    {liastItem.content}
                                <Brief>{this.props.chat.users[targetid].name}</Brief>
                                </Item>
                            </List>
                    )})}

            </div>
         )
     }
 }
  export default NavLink
