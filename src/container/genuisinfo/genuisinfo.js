import React,{Component} from "react";
import {NavBar,Icon,InputItem,TextareaItem,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'
import Avatarselect from '../../component/avatar-selecor/avatar-selecor'
@connect(
    state=>state.user,
    {update}
)
 class Genuisinfo extends Component{
     constructor(){
         super();
         this.handleChange=this.handleChange.bind(this);
         this.state={
             title:'',
             desc:'',
         }
     }
     handleChange(key,value){
         this.setState({
             [key]:value
         })
     }
     render(){
         const pathname=this.props.location.pathname;
         const redirect=this.props.redirectTo;
         return (
             <div>
             {redirect&&redirect!==pathname?<Redirect to={redirect} />:null}
             <NavBar mode="dark">牛人完善信息</NavBar>
             <Avatarselect selectAvatar={(imgname)=>{
                 this.setState({
                     avatar:imgname
                 })
             }}></Avatarselect>
             <InputItem onChange={v=>this.handleChange('title',v)}>求职</InputItem>
             <TextareaItem rows={3}autoHeight title="个人简介"  onChange={v=>this.handleChange('desc',v)}>职位要求</TextareaItem>
             <Button type="primary" onClick={()=>this.props.update(this.state)}>保存</Button>
             </div>
         )
     }
 }
  export default Genuisinfo
