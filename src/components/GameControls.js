import React, { Component, PropTypes } from 'react'
//import { startNewGame } from '../actions.js'

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
        const { index } = this.props;
        const { store } = this.context;

        /*return () =>
            store.dispatch(turnTile(index));*/
    }
}

GameControls.contextTypes = {
    store: React.PropTypes.object
};
