'use strict'
import $ from 'jquery'
import returnRandomEdgeTile from './returnRandomEdgeTile'

export default (enemyType) => {
  let tile = returnRandomEdgeTile()
  $(tile).addClass(enemyType)
  $(tile).addClass('enemy')
  return tile
}