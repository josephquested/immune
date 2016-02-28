'use strict'

import $ from 'jquery'
import returnRandomEdgeTile from './returnRandomEdgeTile'

export default (enemy) => {
  let tile = returnRandomEdgeTile()
  $(tile).addClass('enemy')
  $(tile).addClass('lazy')
  return tile
}