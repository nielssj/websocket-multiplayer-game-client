import React, {Component, PropTypes} from 'react'
import styles from './GameList.css'

export default class GameControls extends Component {
  renderRow(game) {
    const onClick = this.onRowClick.bind(this, game.id)
    return (
      <div className={styles.row} onClick={onClick}>
        <div className={styles.rowLeft}>
          <div>#{game.number}</div>
          <div> - </div>
          <div>{game.status}</div>
        </div>
        <div className={styles.rowRight}>
          <div>{game.playerCount} players</div>
          <div> - </div>
          <div>{game.watcherCount} watchers</div>
        </div>
      </div>
    )
  }

  onRowClick(gameId) {
    if (this.props.onGameClick) {
      this.props.onGameClick(gameId)
    }
  }

  render() {
    let rows = this.props.games.map(this.renderRow.bind(this))
    return (
      <div className={styles.list}>
        {rows}
      </div>
    )
  }
}
