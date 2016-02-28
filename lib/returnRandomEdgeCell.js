'use strict'
import returnRandomEdgeCell from './returnRandomEdgeCell'
import utils from './utils'

import $ from 'jquery'

export default () => {
  let tableSize = $('#board tr').length
  let cells = $('.edge').toArray()
  let cell = $(cells[utils.returnRandomInt(0, cells.length)])
  while ($(cell).hasClass('player') || $(cell).hasClass('enemy')) {
    cell = $(cells[utils.returnRandomInt(0, cells.length)])
  }

  return cell
}

