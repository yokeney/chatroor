import React from "react";
import ReactDom from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {counter,AddGun,DelGun} from './index_redux.js'
const store=createStore(counter)
function render(){
    ReactDom.render(<App store={store} AddGun={AddGun} DelGun={DelGun}/>,document.getElementById('root'))
}
render();
store.subscribe(render);
