import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import LobbyTopBar from '../components/LobbyTopBar/LobbyTopBar'
import GameList from '../components/GameList/GameList'

// FIXME: Fetch from backend and remove this
const games = [
  {
    id: '96cc1d95-234e-4476-b458-44a043d01c21',
    number: 32,
    status: 'playing',
    playerCount: 2,
    watcherCount: 129
  },
  {
    id: '09e644d4-899b-424e-8bdf-3b388b275d5f',
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
        <LobbyTopBar />
        <GameList games={games} onGameClick={this.onGameClick} />
      </div>
    )
  }

  onGameClick(gameId) {
    const path = '/game/' + gameId
    browserHistory.push(path)
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Lobby)