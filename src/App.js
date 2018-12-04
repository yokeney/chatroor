import React,{Component} from "react";
import {Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {AddGun,DelGun,AddGunAsync} from './index_redux'
  class App extends Component{
     render(){
         return (
             <div>
                 <h1>现在有{this.props.num}把</h1>
                 <Button type="primary" onClick={this.props.AddGun}>加</Button>
                 <Button type="danger" onClick={this.props.DelGun}>减</Button>
                 <Button type="danger" onClick={this.props.AddGunAsync}>减</Button>
             </div>
         )
     }
 }
 const mapStatetoProps=(state)=>{
     return {num:state}
 }
 const actionCreators={AddGun,DelGun,AddGunAsync};
 App=connect(mapStatetoProps,actionCreators)(App)
 export default App
