'use strict'

import $ from 'jquery'
import gameOver from './gameOver'

export default (oldCell, direction) => {
  let newCell
  if (direction === 'north') newCell = $(oldCell).closest('tr').prev().children().eq($(oldCell).index())
  if (direction === 'east') newCell = $(oldCell).next()
  if (direction === 'south') newCell = $(oldCell).closest('tr').next().children().eq($(oldCell).index())
  if (direction === 'west') newCell = $(oldCell).prev()
  if (!$(newCell).is('td') && $(oldCell).hasClass('player')) gameOver($('#score').html())
  return newCell
}