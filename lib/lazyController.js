import $ from 'jquery'
import moveActor from './moveActor'
import spawnEnemy from './spawnEnemy'
import returnTileByDirection from './returnTileByDirection'
import returnInvalidDirections from './returnInvalidDirections'
import returnPathToPlayer from './returnPathToPlayer'
import utils from './utils'

let movementSpeed = 500

export default (enemyTile, firstMove) => {
  let lazyController = window.setInterval(() => {
    // let direction = utils.returnRandomDirection()
    let direction

    // *** if this is the enemies first move, move away from the wall *** //
    if (firstMove) {
      firstMove = false
      let attempt = 0
      let invalidDirections = returnInvalidDirections(enemyTile)
      while (invalidDirections.indexOf(direction) > -1 && attempt < 10) {
        direction = utils.returnRandomDirection()
        attempt++
      }
    }

    // *** checks if enemy should die *** //
    if (!$(enemyTile).hasClass('lazy')) {
      clearInterval(lazyController)
      console.log('ENEMY KILLED')
      return
    }

    // let newTile = returnTileByDirection($(enemyTile), direction)
    let newDirection = returnPathToPlayer(enemyTile, $('.player'))
    console.log('player is in direction', newDirection)
    let newTile = returnTileByDirection($(enemyTile), newDirection)
    moveActor('lazy', $(enemyTile), returnTileByDirection($(enemyTile), newDirection))
    // moveActor('lazy', $(enemyTile), returnTileByDirection($(enemyTile), direction))
    enemyTile = $(newTile)
    }, movementSpeed)
}



