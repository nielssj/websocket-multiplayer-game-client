import React, { Component, PropTypes } from 'react'
import { startGame } from '../actions.js'

export default class GameControls extends Component {
    render() {
        return (
            <div className="gameControls">
                <p>
                    <button onClick={this.onNewGameClick()}>New Game</button>
                </p>
            </div>
        )
    }

    onNewGameClick() {
        const { store } = this.context;
        return () => store.dispatch(startGame());
    }
}

GameControls.contextTypes = {
    store: React.PropTypes.object
};
