import $ from 'jquery'
import moveActor from './moveActor'
import spawnEnemy from './spawnEnemy'
import returnTileByDirection from './returnTileByDirection'
import utils from './utils'

let movementSpeed = 500
let firstMove = true

export default (enemyTile, enemyType) => {
  let lazyController = window.setInterval(() => {
    let direction = utils.returnRandomDirection()
    let newTile = returnTileByDirection($(enemyTile), direction)
    moveActor(enemyType, $(enemyTile), returnTileByDirection($(enemyTile), direction))
    enemyTile = $(newTile)
    }, movementSpeed)
}



