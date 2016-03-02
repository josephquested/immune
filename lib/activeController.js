import $ from 'jquery'
import moveActor from './moveActor'
import spawnEnemy from './spawnEnemy'
import returnTileByDirection from './returnTileByDirection'
import returnInvalidDirections from './returnInvalidDirections'
import returnPathToPlayer from './returnPathToPlayer'
import utils from './utils'

let movementSpeed = 500

export default (enemyTile) => {
  let activeController = window.setInterval(() => {

    // *** checks if enemy should die *** //
    if (!$(enemyTile).hasClass('active')) {
      clearInterval(activeController)
      return
    }

    let newDirection = returnPathToPlayer(enemyTile, $('.player'))
    let newTile = returnTileByDirection($(enemyTile), newDirection)
    moveActor('active', $(enemyTile), returnTileByDirection($(enemyTile), newDirection))
    enemyTile = $(newTile)
    }, movementSpeed)
}



