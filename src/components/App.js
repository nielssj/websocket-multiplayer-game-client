import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TileGrid from './TileGrid.js'
import GameInfo from './GameInfo.js'
import GameControls from './GameControls.js'
import { startGame } from '../actions.js';

export default class App extends Component {
    renderGame() {
        const { tiles, players, id } = this.props.game; // Injected by connect() call
        if(tiles.length > 0) {
            return (
                <div>
                    <GameInfo gameId={id} players={players} />
                    <TileGrid tiles={tiles} />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <GameControls user={this.props.user} />
                {this.renderGame()}
            </div>
        )
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