import React, { Component, PropTypes } from 'react'

export default class GameInfo extends Component {
    render() {
        const { points } = this.props;

        return (
            <div className="gameInfo">
                <p>
                    <span>{points}</span>
                    <span> points</span>
                </p>
            </div>
        )
    }
}

GameInfo.propTypes = {
    points: PropTypes.number.isRequired
}