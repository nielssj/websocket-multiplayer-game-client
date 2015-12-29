import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TileGrid from './TileGrid.js'
import { turnTile } from '../actions.js'

export default class App extends Component {
    render() {
        const { dispatch, tiles} = this.props; // Injected by connect() call
        return (
            <div>
                <TileGrid
                    tiles={tiles}
                    onTileClick={index => dispatch(turnTile(index)) }
                />
            </div>
        )
    }
}

App.propTypes = {
    tiles: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            turned: PropTypes.bool.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
};

function select(state) {
    return state;
}

export default connect(select)(App)