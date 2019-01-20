import React from 'react'
export default function imoocForm(Comp){
    return class WrapperComp extends React.Component{
        constructor(){
            super();
            this.state={};
            this.handleChange=this.handleChange.bind(this);
        }
        handleChange(key,value){
            this.setState({
                [key]:value
            })
        }
        render(){
            return <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
        }
    }
}
