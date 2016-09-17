import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Tile from './Tile'

storiesOf('Tile', module)
  .add('Idle tile', () => (
    <Tile
      name="red"
      index={2}
      turned={false}
      completed={false}
    />
  ))
  .add('Turned tile', () => (
    <Tile
      name="red"
      index={2}
      turned={true}
      completed={false}
    />
  ))
  .add('Complete tile', () => (
    <Tile
      name="red"
      index={2}
      turned={true}
      completed={true}
    />
  ))
  .add('Click-able tile', () => (
    <Tile
      name="red"
      index={2}
      turned={false}
      completed={false}
      onClick={action('clicked!')}
    />
  ));
