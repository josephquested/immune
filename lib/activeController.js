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
    // let direction = returnPathToPlayer()
    let direction = utils.returnRandomDirection()

    // *** checks if enemy should die *** //
    if (!$(enemyTile).hasClass('active')) {
      clearInterval(activeController)
      return
    }

    let newTile = returnTileByDirection($(enemyTile), direction)
    moveActor('active', $(enemyTile), returnTileByDirection($(enemyTile), direction))
    enemyTile = $(newTile)
    }, movementSpeed)
}



