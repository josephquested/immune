'use strict'
import returnRandomEdgeCell from './returnRandomEdgeCell'

import $ from 'jquery'

export default () => {
  let tableSize = $('#board tr').length
  let cells = $('.edge').toArray()
  let cell = $(cells[getRandomInt(0, cells.length)])
  while ($(cell).hasClass('player') || $(cell).hasClass('enemy')) {
    cell = $(cells[getRandomInt(0, cells.length)])
  }

  return cell
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
