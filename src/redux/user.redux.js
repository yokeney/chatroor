import axios from 'axios'
import {getRedirectPath} from '../util.js'
const LOGINSUCCESS="LOGINSUCCESS";
const LOAD_DATA='LOAD_DATA';
const REGISTER_SUCCESS="REGISTER_SUCCESS";
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
        case REGISTER_SUCCESS:
            return {...state,isAuth:true,redirectTo:getRedirectPath(action.payload),msg:'',...action.payload}
        case LOGINSUCCESS:
            return {...state,isAuth:true,redirectTo:getRedirectPath(action.payload),msg:'',...action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
            return state
    }
}
function RegisterSuccess(data){
    return {type:REGISTER_SUCCESS,payload:data}
}
function errorMsg(msg){
    return {type:ERROR_MSG,msg:msg}
}
function loginSuccess(data){
    return {type:LOGINSUCCESS,payload:data}
}
export function loaddata(userinfo){
    return {type:LOAD_DATA,payload:userinfo}

}
export function login({user,pwd}){
    if (!user||!pwd) {
        return errorMsg("用户名密码必须输入");
    }
    return dispatch=>{
        axios.post('/user/login',{user,pwd}).then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch(loginSuccess(res.data.data));
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
                dispatch(RegisterSuccess({user,pwd,repwd,type}))
            }
            else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }

}
