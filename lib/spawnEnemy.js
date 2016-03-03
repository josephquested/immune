'use strict'
import $ from 'jquery'
import returnRandomEdgeTile from './returnRandomEdgeTile'

export default (enemyType, tile) => {
  if (!tile) tile = returnRandomEdgeTile()
  $(tile).addClass(enemyType)
  $(tile).addClass('enemy')
  return tile
}