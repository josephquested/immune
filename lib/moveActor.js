'use strict'

import $ from 'jquery'

export default (actor, oldCell, newCell) => {
  $(oldCell).removeClass(actor)
  $(newCell).addClass(actor)
}