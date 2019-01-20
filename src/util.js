//判断用户的类型是boss 还是 genuis对应跳转到相应的info页面
export function getRedirectPath({type,avatar}){
    //根据用户信息 返回调转地址
    // type /gnuis/boss
    //user.avatar /bossinfo/genuisinfo
    let url=(type==='boss')?'boss':'genuis';
    if(!avatar){
        url+='info'
    }
    return url
}
export function getChatId(userid,targetid){
    return [userid,targetid].sort().join('_');
}
