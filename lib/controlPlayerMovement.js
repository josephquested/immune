import $ from 'jquery'
import moveActor from './moveActor'
import returnTileByDirection from './returnTileByDirection'
import gameOver from './gameOver'

const playerSpeed = 200
let playerMovementInterval
let autoMove = false

export default (direction) => {
  $(document).keydown((key) => {
    if (key.which === 38) direction = 'north'
    if (key.which === 39) direction = 'east'
    if (key.which === 40) direction = 'south'
    if (key.which === 37) direction = 'west'
    window.clearInterval(playerMovementInterval)
    moveActor('player', $('.player'), returnTileByDirection($('.player'), direction))
    if (autoMove) startInterval(direction)
  })

  const startInterval = (direction) => {
    playerMovementInterval = window.setInterval(() => {
    let newTile = returnTileByDirection($('.player'), direction)
    moveActor('player', $('.player'), newTile)
    }, playerSpeed)
  }

  if (autoMove) startInterval(direction)
}

