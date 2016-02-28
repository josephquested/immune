'use strict'

import $ from 'jquery'
import controlCollisions from './controlCollisions'

export default (actor, oldTile, newTile) => {
  $(oldTile).removeClass(actor)
  $(newTile).addClass(actor)

  // *** handles enemy class if needed *** //
  if (actor === 'lazy' || actor === 'active' || actor === 'scary') {
    $(oldTile).removeClass('enemy')
    $(newTile).addClass('enemy')
  }

  controlCollisions(newTile)
}