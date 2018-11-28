import React from "react";
import ReactDom from 'react-dom';
import App from './App';
import {applyMiddleware,createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import {counter,AddGun,DelGun,AddGunAsync} from './index_redux.js'
const store=createStore(counter,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension()?window.devToolsExtension():f=>f
    ))
function render(){
    ReactDom.render(<App store={store} AddGun={AddGun} AddGunAsync={AddGunAsync} DelGun={DelGun} />,document.getElementById('root'))
}
render();
store.subscribe(render);
