import React,{Component} from "react";
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'
import Avatarselect from '../../component/avatar-selecor/avatar-selecor'
@connect(
    state=>state.user,
    {update}
)
 class Bossinfo extends Component{
     constructor(){
         super();
         this.handleChange=this.handleChange.bind(this);
         this.state={
             title:'',
             company:'',
             money:'',
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
         return(
             <div>
             {redirect&&redirect!==pathname?<Redirect to={redirect} />:null}
             <NavBar mode="dark">boss完善信息</NavBar>
             <Avatarselect selectAvatar={(imgname)=>{
                 this.setState({
                     avatar:imgname
                 })
             }}></Avatarselect>
             <InputItem onChange={v=>this.handleChange('title',v)}>招聘职位</InputItem>
             <InputItem onChange={v=>this.handleChange('money',v)}>职业薪资</InputItem>
             <InputItem onChange={v=>this.handleChange('company',v)}>公司</InputItem>
             <TextareaItem rows={3}autoHeight title="职位要求"  onChange={v=>this.handleChange('desc',v)}>职位要求</TextareaItem>
             <Button type="primary" onClick={()=>this.props.update(this.state)}>保存</Button>
             </div>
         )
     }
 }
  export default Bossinfo
