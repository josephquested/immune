'use strict'

import $ from 'jquery'
import gameOver from './gameOver'

export default (oldTile, direction) => {
  let tiles = {
    'north': $(oldTile).closest('tr').prev().children().eq($(oldTile).index()),
    'east': $(oldTile).next(),
    'south': $(oldTile).closest('tr').next().children().eq($(oldTile).index()),
    'west': $(oldTile).prev() }
  let newTile = tiles[direction]
  if (!$(newTile).is('td') && $(oldTile).hasClass('player')) gameOver($('#score').html())
  return newTile
}

