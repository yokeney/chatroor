import React,{Component} from "react";
import {Button} from 'antd-mobile'
  class App extends Component{
     render(){
         const store=this.props.store;
         const nmu=store.getState();
         const AddGun=this.props.AddGun;
         const DelGun=this.props.DelGun;
         const AddGunAsync=this.props.AddGunAsync;
         return (
             <div>
                 <h1>现在有{nmu}把</h1>
                 <Button type="primary" onClick={()=>store.dispatch(AddGun())}>加</Button>
                 <Button type="danger" onClick={()=>store.dispatch(DelGun())}>减</Button>
                 <Button type="danger" onClick={()=>store.dispatch(AddGunAsync())}>减</Button>
             </div>
         )
     }
 }
 export default App
