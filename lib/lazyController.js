import $ from 'jquery'
import moveActor from './moveActor'
import spawnEnemy from './spawnEnemy'
import returnTileByDirection from './returnTileByDirection'
import returnInvalidDirections from './returnInvalidDirections'
import utils from './utils'

let movementSpeed = 500

export default (enemyTile, enemyType, firstMove) => {
  let lazyController = window.setInterval(() => {
    let direction = utils.returnRandomDirection()

    // *** if this is the enemies first move, move away from the wall *** //
    if (firstMove) {
      firstMove = false
      let index = 0
      let invalidDirections = returnInvalidDirections(enemyTile)
      while (invalidDirections.indexOf(direction) > -1 && index < 10) {
        console.log('im moving away from the wall! attempt: ', index)
        direction = utils.returnRandomDirection()
        index++
      }
    }

    let newTile = returnTileByDirection($(enemyTile), direction)
    moveActor(enemyType, $(enemyTile), returnTileByDirection($(enemyTile), direction))
    enemyTile = $(newTile)
    }, movementSpeed)
}



