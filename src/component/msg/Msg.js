import React,{Component} from "react";
import {List,Badge} from 'antd-mobile';
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
         const chatList=Object.values(msgGroup).sort((a,b)=>{
             const a_last=this.getLast(a).create_time;
             const b_last=this.getLast(b).create_time;
             console.log(a_last-b_last);
             return a_last-b_last
         });
         console.log(chatList);
         // 1.eslint
         // 2.react1.6特有的错误处理机制
         // 3react性能优化
         return (
            <div>
                    {chatList.map(v=>{
                        const liastItem=this.getLast(v);
                        const targetid=v[0].from==userid?v[0].to:v[0].from;
                        const unread=v.filter(v=>!v.read&&v.to==userid).length
                        if (!this.props.chat.users[targetid]) {
                            return null
                        }
                        return (
                            <List >
                                <Item
                                style={{zIndex:9999}}
                                 extra={<Badge text={unread}></Badge>}
                                 key={liastItem.create_time}
                                 arrow="horizontal"
                                 onClick={()=>{
                                     this.props.history.push(`/chat/${targetid}`)
                                 }}
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
