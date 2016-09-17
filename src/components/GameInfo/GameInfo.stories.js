import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import GameInfo from './GameInfo'

const players = {
  "96cc1d95-234e-4476-b458-44a043d01c21": {
    id:"96cc1d95-234e-4476-b458-44a043d01c21",
    username:"John",
    points: 2,
    hasTurn: true
  },
  "09e644d4-899b-424e-8bdf-3b388b275d5f": {
    id:"09e644d4-899b-424e-8bdf-3b388b275d5f",
    username:"Jane",
    points: 4
  }
}

storiesOf('GameInfo', module)
  .add('Default', () => (
    <GameInfo
      gameId="7ca27259-9323-4fcb-bfcb-9db4bb0b1706"
      players={players}
    />
  ))
