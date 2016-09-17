import React, { Component, PropTypes } from 'react'
import styles from './GameControls.css'

export default class GameControls extends Component {
    constructor(props) {
        super(props)
        this.state = { joinText: "aa051eca-0dbb-4911-8351-f6deb9ad3b45" }
    }

    renderLogin() {
        let user = this.props.user;
        let loginError = user.lastLoginError ? user.lastLoginError.reason : "";
        if(user.username) {
            return (
                <p>
                    <button>Logout</button>
                    <span> {user.username}</span>
                </p>
            )
        } else {
            return (
                <p>
                    <button onClick={this.onLoginClick.bind(this)}>Login</button>
                    <span> </span>
                    <input type="text" onChange={this.onUsernameChanged.bind(this)} placeholder="username" />
                    <span> </span>
                    <input type="text" onChange={this.onPasswordChanged.bind(this)} placeholder="password"  />
                    <span>{loginError}</span>
                </p>
            )
        }
    }

    renderNavigation() {
        let user = this.props.user;
        let joinText = this.state.joinText;
        if(user.username) {
            return (
                <div>
                    <p>
                        <button onClick={this.props.onNewGameClick}>New Game</button>
                    </p>
                    <p>
                        <button onClick={this.onWatchButtonClick.bind(this)}>Watch game</button>
                        <button onClick={this.onJoinButtonClick.bind(this)}>Join</button>
                        <span> </span>
                        <input type="text" value={joinText} onChange={this.onJoinTextChanged.bind(this)} className={styles.joinText} />
                    </p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        <button onClick={this.onWatchButtonClick.bind(this)}>Watch game</button>
                        <span> </span>
                        <input type="text" value={joinText} onChange={this.onJoinTextChanged.bind(this)} className={styles.joinText} />
                    </p>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="gameControls">
                {this.renderLogin()}
                {this.renderNavigation()}
            </div>
        )
    }

    onJoinTextChanged(event) {
        this.setState({ joinText: event.target.value })
    }

    onWatchButtonClick() {
        let gameId = this.state.joinText;
        this.props.onWatchClick(gameId);
    }

    onJoinButtonClick() {
        let gameId = this.state.joinText;
        this.props.onJoinClick(gameId);
    }

    onUsernameChanged(event) {
        this.setState({ username: event.target.value })
    }

    onPasswordChanged(event) {
        this.setState({ password: event.target.value })
    }

    onLoginClick() {
        let username = this.state.username;
        let password = this.state.password;
        this.props.onLoginClick(username, password)
    }
}
