import $ from 'jquery'
import moveActor from './moveActor'
import returnCellByDirection from './returnCellByDirection'
import gameOver from './gameOver'

const playerSpeed = 200
let playerMovementInterval
let autoMove = true

export default (direction) => {
  $(document).keydown((key) => {
    if (key.which === 38) direction = 'north'
    if (key.which === 39) direction = 'east'
    if (key.which === 40) direction = 'south'
    if (key.which === 37) direction = 'west'
    window.clearInterval(playerMovementInterval)
    moveActor('player', $('.player'), returnCellByDirection($('.player'), direction))
    if (autoMove) startInterval(direction)
  })

  const startInterval = (direction) => {
    playerMovementInterval = window.setInterval(() => {
    let newCell = returnCellByDirection($('.player'), direction)
    moveActor('player', $('.player'), newCell)
    }, playerSpeed)
  }

  if (autoMove) startInterval(direction)
}

