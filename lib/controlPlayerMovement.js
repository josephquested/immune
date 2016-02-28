import $ from 'jquery'
import movePlayer from './movePlayer'
import returnCellByDirection from './returnCellByDirection'
import gameOver from './gameOver'

const playerSpeed = 200
let playerMovementInterval

export default (direction) => {
  $(document).keydown((key) => {
    if (key.which === 38) direction = 'north'
    if (key.which === 39) direction = 'east'
    if (key.which === 40) direction = 'south'
    if (key.which === 37) direction = 'west'
    window.clearInterval(playerMovementInterval)
    movePlayer($('.player'), returnCellByDirection($('.player'), direction))
    startInterval(direction)
  })

  const startInterval = (direction) => {
    playerMovementInterval = window.setInterval(() => {
    let newCell = returnCellByDirection($('.player'), direction)
    movePlayer($('.player'), newCell)
    }, playerSpeed)
  }

  startInterval(direction)
}

