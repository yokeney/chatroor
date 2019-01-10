import React,{Component} from "react";
import {List,InputItem,NavBar} from 'antd-mobile'
import {connect} from 'react-redux';
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'
@connect(
    state=>state,
    {getMsgList,sendMsg,recvMsg}
)
class Chat extends Component{
    constructor(){
        super();
        this.state={
            text:'',
            msg:[],
        }
    }
    componentDidMount(){
        this.props.getMsgList();
        this.props.recvMsg();
    }
  handleSubmit(){
      const from=this.props.user._id;
      const to=this.props.match.params.uid;
      const msg=this.state.text;
      this.props.sendMsg({from,to,msg});
      this.setState({text:''});
      }
 render(){
     const user=this.props.match.params.uid;
     const Item=List.Item;
     return (
     <div id="chat-page">
     <NavBar>
        {user}
     </NavBar>
             {this.props.chat.chatmsg.map((v)=>{
                 return v.from==user?(
                     <List key={v._id}>
                        <Item className="chat-user"  extra={'avatar'}>
                            {v.content}
                        </Item>
                     </List>
                 ):(
                     <List key={v._id}>
                        <Item  className="chat-me" >
                            {v.content}
                        </Item>
                     </List>
                 )
             })}
        <div className="stick-footer">
            <div>
            <List>
                <InputItem
                    placeholder="请输入"
                    value={this.state.text}
                    onChange={(v)=>{
                        this.setState({text:v})
                    }}
                    extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
                >
                </InputItem>
            </List>
            </div>
        </div>
    </div>
     )
 }
}
export default  Chat
