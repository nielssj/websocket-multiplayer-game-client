import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TileGrid from './TileGrid/TileGrid.js'
import GameInfo from './GameInfo/GameInfo.js'
import GameControls from './GameControls/GameControls.js'
import { fetchUser, startGame, fetchGame, login, joinGame, turnTile } from '../actions.js'

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchUser()); // Request user info
    }

    renderGame() {
        const { tiles, players, id } = this.props.game; // Injected by connect() call
        if(tiles.length > 0) {
            return (
                <div>
                    <GameInfo gameId={id} players={players} />
                    <TileGrid tiles={tiles} onTileClick={this.onTileClick.bind(this, id)} />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <GameControls
                  user={this.props.user}
                  onNewGameClick={this.onNewGameClick.bind(this)}
                  onWatchClick={this.onWatchClick.bind(this)}
                  onJoinClick={this.onJoinClick.bind(this)}
                  onLoginClick={this.onLoginClick.bind(this)}
                />
                {this.renderGame()}
            </div>
        )
    }

    onNewGameClick() {
      this.props.dispatch(startGame());
    }

    onWatchClick(gameId) {
      this.props.dispatch(fetchGame(gameId));
    }

    onJoinClick(gameId) {
      this.props.dispatch(joinGame(gameId));
    }

    onLoginClick(username, password) {
      this.props.dispatch(login(username, password));
    }

    onTileClick(gameId, tileId) {
      this.props.dispatch(turnTile(gameId, tileId));
    }
}

App.propTypes = {
    game: PropTypes.shape({
        tiles: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                turned: PropTypes.bool.isRequired,
                completed: PropTypes.bool.isRequired
            }).isRequired
        ).isRequired
    })
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App)