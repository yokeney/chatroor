import React,{Component} from "react";
import {List,InputItem} from 'antd-mobile'
import {connect} from 'react-redux';
import {getMsgList} from '../../redux/chat.redux'
@connect(
    state=>state,
    {getMsgList}
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
    }
  handleSubmit(){
      this.setState({text:""})
      }
 render(){
     return (
     <div>
             {this.state.msg.map((v)=>{
                 return <p key={v}>{v}</p>
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
