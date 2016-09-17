import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import GameControls from './GameControls'

storiesOf('GameControls', module)
  .add('Default', () => (
    <GameControls
      user={{}}
      onNewGameClick={action('New game clicked')}
      onWatchClick={action('Watch clicked')}
      onJoinClick={action('Join clicked')}
      onLoginClick={action('Login clicked')}
    />
  ))
  .add('Logged in', () => (
    <GameControls
      user={{ username:"John" }}
      onNewGameClick={action('New game clicked')}
      onWatchClick={action('Watch clicked')}
      onJoinClick={action('Join clicked')}
      onLoginClick={action('Login clicked')}
    />
  ))
