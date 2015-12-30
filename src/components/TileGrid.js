import React, { Component, PropTypes } from 'react'
import Tile from './Tile.js'

export default class TileGrid extends Component {
    render() {
        const { tiles } = this.props;

        let style = {
            width: Math.sqrt(tiles.length) * 140
        };

        return (
            <div className="tileGrid" style={style}>
                {tiles.map((tile, index) =>
                    <Tile {...tile}
                        key={index}
                        index={index}
                    />
                )}
            </div>
        )
    }
}

TileGrid.propTypes = {
    tiles: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            turned: PropTypes.bool.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}