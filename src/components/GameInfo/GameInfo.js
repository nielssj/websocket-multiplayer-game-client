import React, { Component, PropTypes } from 'react'
import styles from './GameInfo.css'

export default class GameInfo extends Component {
    render() {
        const { players, gameId } = this.props;

        let playerItems = [];
        Object.keys(players).forEach(playerId => {
            let player = players[playerId];
            let className = player.hasTurn ? "player " + styles.hasTurn : "player";
            playerItems.push(
                <li key={player.id} className={className}>
                    {player.username} - {player.points}
                </li>
            )
        });

        return (
            <div className="gameInfo">
                <p>GameID: {gameId}</p>
                <ul>
                    {playerItems}
                </ul>
            </div>
        )
    }
}

GameInfo.propTypes = {
    gameId: PropTypes.string.isRequired,
    players: PropTypes.object.isRequired
}