import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { turnTile } from '../actions.js'

export default class Tile extends Component {
    render() {
        const { turned, name, completed } = this.props;

        return (
            <div
                className="tile"
                onClick={turned ? undefined : this.onClick()}
                style={{
                    backgroundColor: turned ? name : 'black',
                    cursor: completed ? 'default' : 'pointer'
                }}>
            </div>
        )
    }

    onClick() {
        const { index } = this.props;
        const { store } = this.context;
        return () =>
            store.dispatch(turnTile(index));
    }
}

Tile.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string,
    turned: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired
}

Tile.contextTypes = {
    store: React.PropTypes.object
}