import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import TileGrid from '../components/TileGrid/TileGrid.js'
import GameInfo from '../components/GameInfo/GameInfo.js'
import GameControls from '../components/GameControls/GameControls'
import { fetchGame, joinGame, turnTile } from '../actions.js'


class Game extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchGame(this.props.params.gameId));
    }

    renderGameControls() {
        const { user, game, params } = this.props

        let canJoin = false
        if (user.username) {
          canJoin = game.players.some(p => p.username === user.username)
        }

        return (
            <GameControls
                gameId={params.gameId}
                canJoin={canJoin}
                onReturn={this.onReturnClick}
                onJoin={this.onJoinClick.bind(this)}
            />
        )
    }

    renderGame() {
        const { tiles, players } = this.props.game;
        const gameId = this.props.params.gameId
        if(tiles.length > 0) {
            return (
                <div>
                    <GameInfo gameId={gameId} players={players} />
                    <TileGrid tiles={tiles} onTileClick={this.onTileClick.bind(this, gameId)} />
                </div>
            )
        } else {
          return <div>Loading..</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderGameControls()}
                {this.renderGame()}
            </div>
        )
    }

    onJoinClick(gameId) {
      this.props.dispatch(joinGame(gameId));
    }

    onTileClick(gameId, tileId) {
      this.props.dispatch(turnTile(gameId, tileId));
    }

    onReturnClick() {
      browserHistory.push('/lobby')
    }
}

Game.propTypes = {
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

export default connect(mapStateToProps)(Game)