
require("./style/style.css");

import 'babel-polyfill'; // Needed by isomorphic-fetch until full browser-support is here
// Redux
import { createStore, applyMiddleware } from 'redux'
import memoryGame from './src/reducers.js'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
// React
import React from 'react'
import { render } from 'react-dom'
import App from './src/components/App.js'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

let store = createStoreWithMiddleware(memoryGame);

let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);