import React,{Component} from "react";
import ReactDOM from 'react-dom';
import {Button} from 'antd-mobile'
 export default class Aa extends Component{
 constructor(){
     super();
     }
     render(){
         return (
             <div><Button type="primary">222</Button></div>
         )
     }
 }
 ReactDOM.render(
     <Aa />,document.getElementById('root')
 )
