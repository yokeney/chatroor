import axios from 'axios';
import io from 'socket.io-client';
const socket=io('ws://localhost:9000');
//获取聊天列表
const MSG_LIST='MSG_LIST';
//读取信息
const MSG_RECV='MSG_RECV';
//标识已读
const MSG_READ='MSG_READ';
const initState={
    chatmsg:[],
    users:{},
    unread:0
}
export function chat(state=initState,action){
    switch (action.type) {
        case MSG_LIST:
            return {...state,users:action.payload.users,chatmsg:action.payload.msg,unread:action.payload.msg.filter(v=>!v.read && v.to===action.payload.userid).length}
        case MSG_RECV:
            const n=action.payload.to===action.userid?1:0;
            console.log(action.payload.to,action.userid);
            return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+n}
        case MSG_READ:
        default:
            return state

    }
}
function msgList(msg,users,userid){
    return {type:MSG_LIST,payload:{msg,users,userid}}
}
export function sendMsg({from,to,msg}){
    return dispatch=>{
        socket.emit('sendmsg',{from,to,msg})
    }
}
function msgRecv(msg,userid){
    return {userid,type:MSG_RECV,payload:msg}
}
export function recvMsg(){
    return (dispatch,getState)=>{
        socket.on('recmsg',function(data){
            const userid=getState().user._id;
            dispatch(msgRecv(data,userid));
        })
    }
}
export function getMsgList(){
    return (dispatch,getState)=>{
        axios.get('/user/getmsgList')
        .then(res=>{
            if (res.status===200 && res.data.code===0) {
                const userid=getState().user._id;
                dispatch(msgList(res.data.msg,res.data.users,userid))
            }
        })
    }
}
