import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import GameList from './GameList'

const games = [
  {
    id: '96cc1d95-234e-4476-b458-44a043d01c21',
    number: 32,
    status: 'playing',
    playerCount: 2,
    watcherCount: 129
  },
  {
    id: '09e644d4-899b-424e-8bdf-3b388b275d5f',
    number: 42,
    status: 'starting',
    playerCount: 1,
    watcherCount: 3
  }
]

storiesOf('GameList', module)
  .add('Default', () => (
    <GameList
      games={games}
      onGameClick={action('Game clicked')}
    />
  ))
