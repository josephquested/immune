'use strict'

import $ from 'jquery'

export default (oldCell, direction) => {
  // let oldIndex = $(oldCell).index()
  let newCell
  if (direction === 'north') newCell = $(oldCell).closest('tr').prev().children().eq($(oldCell).index())
  if (direction === 'east') newCell = $(oldCell).next()
  if (direction === 'south') newCell = $(oldCell).closest('tr').next().children().eq($(oldCell).index())
  if (direction === 'west') newCell = $(oldCell).prev()
  if (!$(newCell).is('td')) { console.log('ERROR: requested cell out of bounds'); return 'err' }
  return newCell
}