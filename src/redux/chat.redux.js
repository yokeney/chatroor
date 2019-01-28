import axios from 'axios';
import io from 'socket.io-client';
const socket=io('ws://localhost:9000');
//获取聊天列表
const MSG_LIST='MSG_LIST';
//读取信息
const MSG_RECV='MSG_RECV';
//标识已读
const Msg_READ='Msg_READ';
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
            return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+n}
        case Msg_READ:
        const { from ,num}=action.payload;
            return {...state,chatmsg:state.chatmsg.map(v=>({...v,read:from===v.from?true:v.read})),unread:state.unread-num}
        default:
            return state

    }
}
function msgList(msg,users,userid){
    return {type:MSG_LIST,payload:{msg,users,userid}}
}
function msgRead({from,userid,num}){
    return  {type:Msg_READ,payload:{from,userid,num}}
}
// async和await配合使用，await在async内部
export function readMsg(from){
    return async (dispatch,getState)=>{
        const res= await axios.post('/user/readMsg',{from})
        const userid=getState().user._id;
        if (res.status===200 && res.data.code===0) {
            dispatch(msgRead({userid,from,num:res.data.num}))
        }
        // .then(res=>{

        // })
    }
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
    return async (dispatch,getState)=>{
        const res=await axios.get('/user/getmsgList')
        if (res.status===200 && res.data.code===0) {
            const userid=getState().user._id;
            dispatch(msgList(res.data.msg,res.data.users,userid))
        }
        // .then(res=>{
        // })
    }
}
