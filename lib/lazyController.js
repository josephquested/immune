import $ from 'jquery'
import moveActor from './moveActor'
import spawnEnemy from './spawnEnemy'
import returnCellByDirection from './returnCellByDirection'
import utils from './utils'

let movementSpeed = 500

export default (enemyCell, enemyType) => {
  let lazyController = window.setInterval(() => {
    let direction = utils.returnRandomDirection()
    let newCell = returnCellByDirection($(enemyCell), direction)
    moveActor(enemyType, $(enemyCell), returnCellByDirection($(enemyCell), direction))
    enemyCell = $(newCell)
    }, movementSpeed)
}



