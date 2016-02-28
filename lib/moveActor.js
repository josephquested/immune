'use strict'

import $ from 'jquery'

export default (actor, oldCell, newCell) => {
  $(oldCell).removeClass(actor)
  $(newCell).addClass(actor)

  // *** handles enemy class if needed *** //
  if (actor === 'lazy' || actor === 'active' || actor === 'scary') {
    $(oldCell).removeClass('enemy')
    $(newCell).addClass('enemy')
  }
}