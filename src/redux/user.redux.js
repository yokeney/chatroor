import axios from 'axios'
import {getRedirectPath} from '../util.js'
const AUTH_SUCCESS="AUTH_SUCCESS";
const LOAD_DATA='LOAD_DATA';//用户注册和登陆保存用户的信息
const ERROR_MSG="ERROR_MSG";
const initState={
    redirectTo:'',
    isAuth:'',
    msg:'',
    user:'',
    pwd:'',
    type:'',
}
//reducer
export function user(state=initState,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state,redirectTo:getRedirectPath(action.payload),msg:'',...action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
            return state
    }
}
function Auth_success(obj){
    const {pwd,...data}=obj;
    return {type:AUTH_SUCCESS,payload:data}
}
function errorMsg(msg){
    return {type:ERROR_MSG,msg:msg}
}
export function loaddata(userinfo){
    return {type:LOAD_DATA,payload:userinfo}
}
export function update(data){
    return dispatch=>{
        axios.post('/user/update',data).then((res)=>{
            if(res.status===200&&res.data.code===0){
                dispatch(Auth_success(res.data.data));
            }
            else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
export function login({user,pwd}){
    if (!user||!pwd) {
        return errorMsg("用户名密码必须输入");
    }
    return dispatch=>{
        axios.post('/user/login',{user,pwd}).then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch(Auth_success(res.data.data));
            }
            else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
export function register({user,pwd,repwd,type}){
    if(!user||!pwd||!type||!repwd){
        return errorMsg('用户名密码必须输入')
    }
    if(pwd!==repwd){
        return errorMsg('密码不一致')
    }
    return dispatch=>{
        axios.post("/user/register",{user,pwd,repwd,type}).then((res)=>{
            if(res.status===200&&res.data.code===0){
                dispatch(Auth_success({user,pwd,repwd,type}))
            }
            else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }

}
