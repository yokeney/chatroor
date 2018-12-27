import axios from 'axios';
const USER_LIST='USER_LIST';
function userList(data){
    return {type:USER_LIST,payload:data}
}
const initState={
    userList:[]
}
export function chatuser(state=initState,action){
    switch (action.type) {
        case USER_LIST:
            return {...state,userList:action.payload}
        default:
            return state
    }
}
export function getUserList(type){
    return dispatch=>{
        axios.get('/user/list?type='+type).then(res=>{
            if(res.data.code===0){
                dispatch(userList(res.data.data))
                // this.setState({data:res.data.data})
            }
        })
    }
}
