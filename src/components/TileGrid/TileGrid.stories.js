import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TileGrid from './TileGrid'

const noTilesTurned = [{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false},{"turned":false,"completed":false}]
const someTilesTurned = [{"completed":false,"turned":false},{"completed":false,"turned":false},{"completed":false,"turned":false},{"completed":false,"turned":false},{"completed":false,"turned":false},{"completed":false,"turned":false},{"completed":false,"turned":false},{"completed":true,"name":"#0D60FF","turned":true},{"completed":true,"name":"#FF5E00","turned":true},{"completed":false,"turned":false},{"completed":true,"name":"#FF5E00","turned":true},{"completed":false,"turned":false},{"completed":true,"name":"#0D60FF","turned":true},{"completed":false,"turned":false},{"completed":false,"turned":false},{"completed":false,"turned":false}]
const allTilesTurned = [{"completed":true,"name":"#DB0CE8","turned":true},{"completed":true,"name":"#FF5654","turned":true},{"completed":false,"name":"#FF5E00","turned":true},{"completed":true,"name":"#0D60FF","turned":true},{"completed":true,"name":"#FF5654","turned":true},{"completed":true,"name":"#00FF4C","turned":true},{"completed":true,"name":"#DB0CE8","turned":true},{"completed":false,"name":"#FF5E00","turned":true},{"completed":true,"name":"#ACFF54","turned":true},{"completed":true,"name":"#ACFF54","turned":true},{"completed":true,"name":"#00FF4C","turned":true},{"completed":true,"name":"#E8D50C","turned":true},{"completed":true,"name":"#E8D50C","turned":true},{"completed":true,"name":"#E8B040","turned":true},{"completed":true,"name":"#0D60FF","turned":true},{"completed":true,"name":"#E8B040","turned":true}]

storiesOf('TileGrid', module)
  .add('No tiles turned', () => (
    <TileGrid
      tiles={noTilesTurned}
      onTileClick={action('Tile clicked')}
    />
  ))
  .add('Some tiles turned', () => (
    <TileGrid
      tiles={someTilesTurned}
    />
  ))
  .add('All tiles turned', () => (
    <TileGrid
      tiles={allTilesTurned}
    />
  ))
