import React,{Component} from "react";
import LogoImg from './job.png';
import './logo.css'
  class Logo extends Component{
 constructor(){
     super();

     }
     render(){
         return (
             <div className="logo-container">
                <img src={LogoImg} alt=""/>
             </div>
         )
     }
 }
 export default Logo
