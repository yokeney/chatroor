import React from "react";
import ReactDom from 'react-dom';
import App from './App';
import {applyMiddleware,createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {counter} from './index_redux.js'
const store=createStore(counter,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f=>f
    ))
    ReactDom.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'))
// store.subscribe(render);
