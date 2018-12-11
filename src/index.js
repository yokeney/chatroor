import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import { Provider } from 'react-redux'
import Bossinfo from './container/bossinfo/bossinfo.js'
import AuthRoute from './component/authroute/authroute.js'
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import reducers from './reducer'
import './config'
import 'antd-mobile/dist/antd-mobile.css';
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))
function Boss(){
    return <h1>11</h1>
}
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
        <div>
            <AuthRoute></AuthRoute>
            <Route path="/bossinfo" component={Bossinfo}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
        </div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
