import React,{Component} from "react";
import {NavBar,Icon,InputItem,TextareaItem,Button} from 'antd-mobile'
import Avatarselect from '../../component/avatar-selecor/avatar-selecor'
 export default class Bossinfo extends Component{
     constructor(){
         super();
         this.handleChange=this.handleChange.bind();
     }
     handleChange(key,value){
         console.log(key,value);
     }
     render(){
         return (
             <div>
             <NavBar mode="dark">NavBar</NavBar>
             <Avatarselect selectAvatar={(imgname)=>{
                 this.setState({
                     avatar:imgname
                 })
             }}></Avatarselect>
             <InputItem onChange={v=>this.handleChange('title',v)}>招聘职位</InputItem>
             <InputItem onChange={v=>this.handleChange('company',v)}>公司名称</InputItem>
             <InputItem onChange={v=>this.handleChange('money',v)}>职业薪资</InputItem>
             <TextareaItem rows={3}autoHeight title="职位要求"  onChange={v=>this.handleChange('desc',v)}>职位要求</TextareaItem>
             <Button type="primary">保存</Button>
             </div>
         )
     }
 }
