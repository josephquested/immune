import $ from 'jquery'
import movePlayer from './movePlayer'
import findCellByDirection from './returnCellByDirection'

export default () => {
  $(document).keyup((key) => {
    let direction
    if (key.which === 38) direction = 'north'
    if (key.which === 39) direction = 'east'
    if (key.which === 40) direction = 'south'
    if (key.which === 37) direction = 'west'
    if (direction !== undefined) {
      let oldCell = $('.player')
      let newCell = findCellByDirection(oldCell, direction)
      if (newCell === 'err') return
      movePlayer(oldCell, newCell)
    }
  })
}