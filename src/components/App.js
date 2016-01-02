import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TileGrid from './TileGrid.js'
import GameInfo from './GameInfo.js'
import { fetchGame } from '../actions.js';

export default class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchGame()); // Request initial state - TODO: Do this server-side
    }

    render() {
        const { tiles, points } = this.props.game; // Injected by connect() call
        return (
            <div>
                <GameInfo points={points} />
                <TileGrid tiles={tiles} />
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
        ).isRequired,
        points: PropTypes.number.isRequired
    })
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App)