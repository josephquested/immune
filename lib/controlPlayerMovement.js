import $ from 'jquery'
import moveActor from './moveActor'
import returnTileByDirection from './returnTileByDirection'
import gameOver from './gameOver'
import updatePlayerSpeed from './updatePlayerSpeed'
import checkForChainSkip from './checkForChainSkip'

let playerSpeed = 200
let playerMovementInterval
// let autoMove = true
let autoMove = false

let directions = new Map([
   [38, 'north'],
   [39, 'east'],
   [40, 'south'],
   [37, 'west']])

export default (direction) => {

  // *** controls key presses for movement *** //
  $(document).keydown((key) => {
    direction = directions.get(key.which)
    if (!direction) return
    if (checkForChainSkip(returnTileByDirection($('.player'), direction))) return
    window.clearInterval(playerMovementInterval)
    moveActor('player', $('.player'), returnTileByDirection($('.player'), direction))
    playerSpeed = updatePlayerSpeed(window.cellChain)
    if (autoMove) startInterval(direction)
  })

  // *** controls auto movement *** //
  const startInterval = (direction) => {
    playerMovementInterval = window.setInterval(() => {
    let newTile = returnTileByDirection($('.player'), direction)
    moveActor('player', $('.player'), newTile)
    }, playerSpeed)
  }

  if (autoMove) startInterval(direction)
}

