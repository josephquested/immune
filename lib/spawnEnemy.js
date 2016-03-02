'use strict'
import $ from 'jquery'
import returnRandomEdgeTile from './returnRandomEdgeTile'

export default (enemyType, tile) => {
  if (!tile) tile = returnRandomEdgeTile()
  $(tile).addClass(enemyType)
  $(tile).addClass('enemy')
  console.log('enemy classes', $(tile).attr('class'))
  return tile
}