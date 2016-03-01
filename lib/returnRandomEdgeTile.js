'use strict'
import utils from './utils'

import $ from 'jquery'

export default () => {
  let tableSize = $('#board tr').length
  let tiles = $('.edge').toArray()
  let tile = $(tiles[utils.returnRandomInt(0, tiles.length)])
  while ($(tile).hasClass('player') || $(tile).hasClass('enemy') ||  $(tile).hasClass('cell')) {
    tile = $(tiles[utils.returnRandomInt(0, tiles.length)])
  }

  return tile
}

