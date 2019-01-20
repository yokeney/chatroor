import React,{Component} from "react";
import {Grid,List} from 'antd-mobile'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
 export default class Avatarselect extends Component{
     static propTypes={
         selectAvatar:PropTypes.func.isRequired
     }
    constructor(){
        super();
        this.state={}
    }
     render(){
         const avatarlist='boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
                          .split(",")
                          .map(v=>({
                              icon:require(`../img/${v}.png`),
                              text:v
                          }))
         const gridHeight=this.state.text
                          ?(<div>
                              <span>已选择头像</span>
                              <img src={this.state.icon} style={{width:20}} alt=""/>
                              </div>)
                              :'请选择头像'
         return (
             <div>
             <List renderHeight={()=>gridHeight}>
                {gridHeight}
                <Grid
                data={avatarlist}
                columnNum={5}
                onClick={elm=>{
                    this.setState(elm)
                    this.props.selectAvatar(elm.text)
                }}
                />
             </List>
             </div>
         )
     }
 }
