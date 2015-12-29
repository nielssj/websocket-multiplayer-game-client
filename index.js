
require("./style/style.css");

// Redux
import { createStore } from 'redux'
import memoryGame from './src/reducers.js'
import { Provider } from 'react-redux'
// React
import React from 'react'
import { render } from 'react-dom'
import App from './src/components/App.js'

let store = createStore(memoryGame);

let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);