import React, { Component, PropTypes } from 'react'
import { startGame, fetchGame, login } from '../actions.js'

export default class GameControls extends Component {
    constructor(props) {
        super(props)
        this.state = { joinText: "aa051eca-0dbb-4911-8351-f6deb9ad3b45" }
    }

    renderLogin() {
        let user = this.props.user;
        let loginError = user.lastLoginError ? user.lastLoginError.reason : "";
        if(user.token) {
            return (
                <p>
                    <button>Logout</button>
                    <span> {user.username}</span>
                </p>
            )
        } else {
            return (
                <p>
                    <button onClick={this.handleLoginClick.bind(this)}>Login</button>
                    <span> </span>
                    <input type="text" onChange={this.handleUsernameChanged.bind(this)} placeholder="username" />
                    <span> </span>
                    <input type="text" onChange={this.handlePasswordChanged.bind(this)} placeholder="password"  />
                    <span>{loginError}</span>
                </p>
            )
        }
    }

    renderNavigation() {
        let user = this.props.user;
        let joinText = this.state.joinText;
        if(user.token) {
            return (
                <div>
                    <p>
                        <button onClick={this.onNewGameClick()}>New Game</button>
                    </p>
                    <p>
                        <button onClick={this.handleJoinButtonClick.bind(this)}>Join game</button>
                        <span> </span>
                        <input type="text" value={joinText} onChange={this.handleJoinTextChanged.bind(this)} className="joinText" />
                    </p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        <button onClick={this.handleJoinButtonClick.bind(this)}>Watch game</button>
                        <span> </span>
                        <input type="text" value={joinText} onChange={this.handleJoinTextChanged.bind(this)} className="joinText" />
                    </p>
                </div>
            )
        }
    }

    render() {
        let joinText = this.state.joinText;
        return (
            <div className="gameControls">
                {this.renderLogin()}
                {this.renderNavigation()}
            </div>
        )
    }

    onNewGameClick() {
        const { store } = this.context;
        let authToken = store.getState().user.token;
        return () => store.dispatch(startGame(authToken));
    }

    handleJoinTextChanged(event) {
        this.setState({ joinText: event.target.value })
    }

    handleJoinButtonClick() {
        const { store } = this.context;
        let gameId = this.state.joinText;
        store.dispatch(fetchGame(gameId));
    }

    handleUsernameChanged(event) {
        this.setState({ username: event.target.value })
    }

    handlePasswordChanged(event) {
        this.setState({ password: event.target.value })
    }

    handleLoginClick() {
        const { store } = this.context;
        let username = this.state.username;
        let password = this.state.password;
        store.dispatch(login(username, password));
    }
}

GameControls.contextTypes = {
    store: React.PropTypes.object
};
