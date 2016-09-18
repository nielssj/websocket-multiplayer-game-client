import React, { Component, PropTypes } from 'react'
import styles from './Tile.css'

export default class Tile extends Component {
    render() {
        const { turned, name, completed } = this.props;
        let className = !turned ? `${styles.tile} ${styles.unturned}` : styles.tile
        return (
            <div
                className={className}
                onClick={turned ? undefined : this.onClick.bind(this)}
                style={{
                    backgroundColor: turned ? name : 'black',
                    cursor: completed ? 'default' : 'pointer'
                }}>
            </div>
        )
    }

    onClick() {
        if (this.props.onClick) {
          let tileId = this.props.index;
          this.props.onClick(tileId)
        }
    }
}

Tile.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string,
    turned: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func
}