'use strict'

import $ from 'jquery'
import gameOver from './gameOver'

export default (oldTile, direction) => {
  let newTile
  if (direction === 'north') newTile = $(oldTile).closest('tr').prev().children().eq($(oldTile).index())
  if (direction === 'east') newTile = $(oldTile).next()
  if (direction === 'south') newTile = $(oldTile).closest('tr').next().children().eq($(oldTile).index())
  if (direction === 'west') newTile = $(oldTile).prev()
  if (!$(newTile).is('td') && $(oldTile).hasClass('player')) gameOver($('#score').html())
  return newTile
}