export function getRedirectPath({type,avatar}){
    //根据用户信息 返回调转地址
    // type /gnuis/boss
    //user.avatar /bossinfo/genuisinfo
    let url=(type==='boss')?'boss':'genuis';
    if(!avatar){
        url+='info';
    }
    return url;

}
