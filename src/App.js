import React,{Component} from "react";
import {Button} from 'antd-mobile'
import {AddGun} from './index_redux'
  class App extends Component{
     render(){
         const store=this.props.store;
         const nmu=store.getState();
         return (
             <div>
                 <h1>现在有{nmu}把</h1>
                 <Button type="primary" onClick={()=>store.dispatch(AddGun())}></Button>
             </div>
         )
     }
 }
 export default App
