import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import LobbyTopBar from './LobbyTopBar'

const player = {
  id:"09e644d4-899b-424e-8bdf-3b388b275d5f",
  username:"John"
}

storiesOf('LobbyTopBar', module)
  .add('Default', () => (
    <LobbyTopBar
      onLogin={linkTo('LobbyTopBar', 'Logged in')}
    />
  ))
  .add('Logged in', () => (
    <LobbyTopBar
      player={player}
      onLogout={linkTo('LobbyTopBar', 'Default')}
    />
  ))
  .add('With actions', () => (
    <LobbyTopBar
      onNewGame={action('New game clicked')}
      onLogin={action('Login clicked')}
    />
  ))
