import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TileGrid from './TileGrid.js'
import { fetchGame } from '../actions.js';

export default class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchGame()); // Request initial state - TODO: Do this server-side
    }

    render() {
        const { tiles } = this.props; // Injected by connect() call
        return (
            <div>
                <TileGrid tiles={tiles} />
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

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App)