import React, { Component, PropTypes } from 'react'
import { startGame, fetchGame } from '../actions.js'

export default class GameControls extends Component {
    constructor(props) {
        super(props)
        this.state = { joinText: "" }
    }

    render() {
        let joinText = this.state.joinText;
        return (
            <div className="gameControls">
                <p>
                    <button onClick={this.onNewGameClick()}>New Game</button>
                </p>
                <p>
                    <button onClick={this.handleJoinButtonClick.bind(this)}>
                        Join game
                    </button>
                    <span> </span>
                    <input
                        type="text"
                        value={joinText}
                        onChange={this.handleJoinTextChanged.bind(this)}
                    />
                </p>
            </div>
        )
    }

    onNewGameClick() {
        const { store } = this.context;
        return () => store.dispatch(startGame());
    }

    handleJoinTextChanged(event) {
        this.setState({ joinText: event.target.value })
    }

    handleJoinButtonClick() {
        const { store } = this.context;
        let gameId = this.state.joinText;
        store.dispatch(fetchGame(gameId));
    }
}

GameControls.contextTypes = {
    store: React.PropTypes.object
};
