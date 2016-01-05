import React, { Component, PropTypes } from 'react'

export default class GameInfo extends Component {
    render() {
        const { players } = this.props;

        let playerItems = [];
        Object.keys(players).forEach(playerId => {
            let player = players[playerId];
            playerItems.push(<li key={player.id}>{player.username} - {player.points}</li>)
        });

        return (
            <div className="gameInfo">
                <ul>
                    {playerItems}
                </ul>
            </div>
        )
    }
}

GameInfo.propTypes = {
    players: PropTypes.object.isRequired
}