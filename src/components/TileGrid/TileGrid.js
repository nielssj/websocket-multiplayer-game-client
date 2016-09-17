import React, { Component, PropTypes } from 'react'
import styles from './TileGrid.css'
import Tile from '../Tile/Tile.js'

export default class TileGrid extends Component {
    render() {
        const { tiles } = this.props;

        let style = {
            width: Math.sqrt(tiles.length) * 140
        };

        return (
            <div className={styles.tileGrid} style={style}>
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