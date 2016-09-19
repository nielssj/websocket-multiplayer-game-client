import React, { Component, PropTypes } from 'react'
import styles from './GameControls.css'

export default class GameControls extends Component {
    renderRightControls() {
        if (this.props.canJoin) {
            return (
                <div className={styles.rowRight}>
                    <button onClick={this.onJoinButtonClick.bind(this)}>Join Game</button>
                </div>
            )

        }
    }

    render() {
        return (
            <div className={styles.GameControls}>
                <div className={styles.rowLeft}>
                    <button onClick={this.onReturnButtonClick.bind(this)}>Return to Lobby</button>
                </div>
                {this.renderRightControls()}
            </div>
        )
    }

    onJoinButtonClick() {
        let gameId = this.props.gameId;
        this.props.onJoin(gameId);
    }

    onReturnButtonClick() {
        if(this.props.onReturn) {
            this.props.onReturn();
        }
    }
}
