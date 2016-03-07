import $ from 'jquery'
import moveActor from './moveActor'
import spawnEnemy from './spawnEnemy'
import returnTileByDirection from './returnTileByDirection'
import returnInvalidDirections from './returnInvalidDirections'
import returnPathToPlayer from './returnPathToPlayer'
import initCellChain from './initCellChain'
import sliceChain from './sliceChain'
import faker from 'faker'
import utils from './utils'

let movementSpeed = 500

export default (enemyTile) => {
  let enemyID = `${faker.name.firstName()}_${faker.name.lastName()}`
  $(enemyTile).addClass(enemyID)
  initCellChain(enemyID)
  let activeController = window.setInterval(() => {

    // *** checks if enemy should die *** //
    if (!$(enemyTile).hasClass('active')) {
      if (window.chains[enemyID].chain[0]) {
        sliceChain(window.chains[enemyID].chain[0], enemyID)
      }
      clearInterval(activeController)
      return
    }

    let newDirection = returnPathToPlayer(enemyTile, $('.player'))
    let newTile = returnTileByDirection($(enemyTile), newDirection)
    moveActor('active', $(enemyTile), returnTileByDirection($(enemyTile), newDirection), enemyID)
    enemyTile = $(newTile)
    }, movementSpeed)
}




