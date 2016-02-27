'use strict'

import $ from 'jquery'

export default (oldCell, newCell) => {
  $(oldCell).removeClass('player')
  $(newCell).addClass('player')
}