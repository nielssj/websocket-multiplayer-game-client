
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
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './src/components/App.js'
import Lobby from './src/containers/Lobby'
import Game from './src/containers/Game'
import NotFound from './src/containers/NotFound'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

let store = createStoreWithMiddleware(memoryGame);

let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/lobby" component={Lobby}/>
          <Route path="/game/:gameId" component={Game}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    </Provider>,
    rootElement
);