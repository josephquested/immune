'use strict'
import utils from './utils'

import $ from 'jquery'


export default () => {
  let tableSize = $('#board tr').length
  let tiles = $('.edge').toArray()
  let tile = $(tiles[utils.returnRandomInt(0, tiles.length)])
  let testTiles
  let invalidTile = true


  while (invalidTile) {
    let safeTiles = 0
    testTiles = [
      $(tile),
      $(tile).closest('tr').prev().children().eq($(tile).index()),
      $(tile).next(),
      $(tile).closest('tr').next().children().eq($(tile).index()),
      $(tile).prev()
    ]

    testTiles.forEach((testTile) => {
      if (!$(testTile).hasClass('player') && !$(testTile).hasClass('enemy')) {
        safeTiles++
      }
    })

      if (safeTiles === 5) {
        invalidTile = false
      } else {
        tile = $(tiles[utils.returnRandomInt(0, tiles.length)])
      }
  }

  return tile
}

