const Add='加';
const DEL='减';
export function counter(state=0,action){
    switch (action.type) {
        case '加':
            return state+1
        case '减':
            return state-1
        default:
           return 10
       }
}
export function AddGun(){
    return {type:Add}
}
export function DelGun(){
    return {type:DEL}

}
export function AddGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(AddGun())
        },2000)
    }
}
