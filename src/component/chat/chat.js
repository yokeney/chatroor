import React,{Component} from "react";
import io from 'socket.io-client';
import {List,InputItem} from 'antd-mobile'
        const socket=io('ws://localhost:9000');
class Chat extends Component{
    constructor(){
        super();
        this.state={
            text:'',
            msg:[],
        }
    }
    componentDidMount(){
        socket.on("recmsg",(data)=>{
            this.setState({
                msg:[...this.state.msg,data.text]
            })
        })
    }
  handleSubmit(){
      socket.emit('sendmsg',{text:this.state.text})
      this.setState({text:""})
      }
 render(){
     return (
        <div className="stick-footer">
            <div>
            {this.state.msg.map((v)=>{
                return <p key={v}>{v}</p>
            })}
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
     )
 }
}
export default  Chat
