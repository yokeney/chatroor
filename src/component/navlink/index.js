import React,{Component} from "react";
import {TabBar} from 'antd-mobile'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
@connect(
    state=>state.chat,
)
@withRouter
 class NavLink extends Component{
     static PropTypes={
         data:PropTypes.array.isRequired
     }
     render(){
         const navList=this.props.data.filter(v=>!v.hide);
         const {pathname} =this.props.location;
         return (
             <TabBar>
                 {navList.map(v=>(
                     <TabBar.Item
                         badge={v.path==='/msg'?this.props.unread:0}
                         key={v.path}
                         title={v.text}
                         icon={{uri: require(`./img/${v.icon}.png`)}}
                         selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
                         selected={pathname===v.path}
                         onPress={()=>{
                             this.props.history.push(v.path)
                         }}
                     >

                     </TabBar.Item>
                 ))}
             </TabBar>
         )
     }
 }
  export default NavLink
