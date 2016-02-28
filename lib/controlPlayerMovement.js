import $ from 'jquery'
import movePlayer from './movePlayer'
import returnCellByDirection from './returnCellByDirection'
import gameOver from './gameOver'

const playerSpeed = 200

export default (direction) => {
  $(document).keydown((key) => {
    if (key.which === 38) direction = 'north'
    if (key.which === 39) direction = 'east'
    if (key.which === 40) direction = 'south'
    if (key.which === 37) direction = 'west'
  })

  window.setInterval(() => {
    let newCell = returnCellByDirection($('.player'), direction)
    // if (newCell === 'err') gameOver(4815162342)
    if (newCell === 'err') return
    movePlayer($('.player'), newCell)
  }, playerSpeed)
  return direction
}

