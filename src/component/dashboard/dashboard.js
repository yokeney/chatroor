import React,{Component} from "react";
import {Route,Switch} from "react-router-dom"
import {connect} from 'react-redux';
import {NavBar} from 'antd-mobile'
import NavLink from '../navlink/index.js'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'

function Msg(){
    return <h1>Msg</h1>
}
function User(){
    return <h1>User</h1>
}
@connect(
    state=>state
)
 class Dashboard extends Component{
 constructor(){
     super();
     }
     render(){
         const user=this.props.user
         const navList=[
             {
                 path:'/boss',
                 text:'牛人',
                 icon:'boss',
                 title:'牛人列表',
                 component:Boss,
                 hide:user.type==="genius"
             },
             {
                 path:'/genuis',
                 text:'boss',
                 icon:'job',
                 title:'boss列表',
                 component:Genius,
                 hide:user.type==="boss"
             },
             {
                 path:'/msg',
                 text:'消息',
                 icon:'msg',
                 title:'消息列表',
                 component:Msg,
             },
             {
                 path:'/me',
                 text:'我的',
                 icon:'user',
                 title:'个人中心',
                 component:User,
             }
         ]
         const {pathname}=this.props.location;
         return (
            <div>
                <NavBar mode='dard'>{navList.find(v=>v.path==pathname).title}</NavBar>
                <div style={{marginTop:15}}>
                    <Switch>
                    {
                        navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component} />
                        ))
                    }
                    </Switch>
                </div>
                <NavLink data={navList}></NavLink>
            </div>
         )
     }
 }
 export default Dashboard;
