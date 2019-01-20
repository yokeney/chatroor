import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import { Provider } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';
import Bossinfo from './container/bossinfo/bossinfo.js'
import Genuisinfo from './container/genuisinfo/genuisinfo.js'
import AuthRoute from './component/authroute/authroute.js'
import './index.css'
import Dashboard from './component/dashboard/dashboard.js'
import Chat from './component/chat/chat'
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import reducers from './reducer'
import './config'
import './index.js'
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
            <Switch>
                <Route path="/bossinfo" component={Bossinfo}></Route>
                <Route path="/genuisinfo" component={Genuisinfo}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/chat/:uid" component={Chat}></Route>
                <Route component={Dashboard}></Route>
            </Switch>
        </div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
