import React from "react";
import ReactDom from 'react-dom';
import App from './App';
import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import {counter,AddGun,DelGun,AddGunAsync} from './index_redux.js'
const store=createStore(counter,applyMiddleware(thunk));
function render(){
    ReactDom.render(<App store={store} AddGun={AddGun} AddGunAsync={AddGunAsync} DelGun={DelGun} />,document.getElementById('root'))
}
render();
store.subscribe(render);
