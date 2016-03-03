import $ from 'jquery'
import utils from './utils'

export default (enemyTile, playerTile) => {
  let enemyXY = $(enemyTile).attr('id').split('_').slice(1)
  let playerXY = $(playerTile).attr('id').split('_').slice(1)
  let yDifference = Math.abs(enemyXY[0] - playerXY[0])
  let xDifference = Math.abs(enemyXY[1] - playerXY[1])
  let playerX = Number(playerXY[1])
  let playerY = Number(playerXY[0])
  let enemyX = Number(enemyXY[1])
  let enemyY = Number(enemyXY[0])

  if (xDifference > yDifference) {
    if (enemyX > playerX) { return 'west' }
    if (enemyX < playerX) { return 'east' }
    if (enemyX === playerX) { return utils.returnRandomDirection() }
  }

  if (yDifference > xDifference) {
    if (enemyY > playerY) { return 'north' }
    if (enemyY < playerY) { return 'south' }
    if (enemyY === playerY) { return utils.returnRandomDirection() }
  }

  if (xDifference === yDifference) {
    if (enemyX > playerX && enemyY < playerY) { return 'south' }
    if (enemyX > playerX && enemyY > playerY) { return 'north' }
    if (enemyX < playerX && enemyY > playerY) { return 'north' }
    if (enemyX < playerX && enemyY < playerY) { return 'south' }
    }
  }
}

