import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import LobbyTopBar from '../components/LobbyTopBar/LobbyTopBar'
import GameList from '../components/GameList/GameList'
import { startGame, login } from '../actions.js'

// FIXME: Fetch from backend and remove this
const games = [
  {
    id: '06e98f9d-e475-4a08-8dbf-84316ed550a2',
    number: 32,
    status: 'playing',
    playerCount: 2,
    watcherCount: 129
  },
  {
    id: '64529bcd-6b5c-4d3e-9398-38dc82a6366b',
    number: 42,
    status: 'starting',
    playerCount: 1,
    watcherCount: 3
  }
]

class Lobby extends Component {
  render() {
    return (
      <div>
        <LobbyTopBar
          user={this.props.user}
          onNewGame={this.onNewGameClick.bind(this)}
          onLogin={this.onLoginClick.bind(this)}
        />
        <GameList games={games} onGameClick={this.onGameClick} />
      </div>
    )
  }

  onGameClick(gameId) {
    const path = '/game/' + gameId
    browserHistory.push(path)
  }

  onNewGameClick() {
    this.props.dispatch(startGame());
  }

  onLoginClick(username, password) {
    this.props.dispatch(login(username, password));
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Lobby)