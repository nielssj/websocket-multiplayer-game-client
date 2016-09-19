import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import GameControls from './GameControls'

storiesOf('GameControls', module)
  .add('Default', () => (
    <GameControls
      gameId="06e98f9d-e475-4a08-8dbf-84316ed550a2"
      canJoin={true}
      onJoin={linkTo('GameControls', 'Joined game')}
      onReturn={action('Login clicked')}
    />
  ))
  .add('Joined game', () => (
    <GameControls
      gameId="06e98f9d-e475-4a08-8dbf-84316ed550a2"
      canJoin={false}
      onJoin={action('Return clicked')}
      onReturn={action('Login clicked')}
    />
  ))
