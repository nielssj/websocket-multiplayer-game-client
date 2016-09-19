import React, {Component, PropTypes} from 'react'
import styles from './LobbyTopBar.css'

export default class LobbyTopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderProfile() {
    const user = this.props.user
    if (user && user.username) {
      return (
        <div className={styles.rowRight}>
          <div className={styles.textBlock}>Hello {user.username}!</div>
          <div><button onClick={this.props.onLogout}>Logout</button></div>
        </div>
      )
    } else {
      return (
        <div className={styles.rowRight}>
          <div><input type="text" placeholder="username" onChange={this.onUsernameChanged.bind(this)} /></div>
          <div><input type="text" placeholder="password" onChange={this.onPasswordChanged.bind(this)} /></div>
          <div><button onClick={this.onLoginClick.bind(this)}>Login</button></div>
        </div>
      )
    }
  }

  onUsernameChanged(event) {
    this.setState({ username: event.target.value })
  }

  onPasswordChanged(event) {
    this.setState({ password: event.target.value })
  }

  onLoginClick() {
    const username = this.state.username
    const password = this.state.password
    this.props.onLogin(username, password)
  }

  render() {
    return (
      <div className={styles.LobbyTopBar}>
        <div className={styles.rowLeft}>
          <button onClick={this.props.onNewGame}>New Game</button>
        </div>
        {this.renderProfile()}
      </div>
    )
  }
}
