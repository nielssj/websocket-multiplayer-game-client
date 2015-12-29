import React, { Component, PropTypes } from 'react'

export default class Tile extends Component {
    render() {
        const { onClick, turned, name, completed } = this.props;
        return (
            <div
                className="tile"
                onClick={turned ? undefined : onClick}
                style={{
                    backgroundColor: turned ? name : 'black',
                    cursor: completed ? 'default' : 'pointer'
                }}>
            </div>
        )
    }
}

Tile.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string,
    turned: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired
}