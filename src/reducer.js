
// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import {user} from './redux/user.redux.js'
import {chatuser} from './redux/chartuser.redux.js'
export default combineReducers({user,chatuser})
