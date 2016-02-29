'use strict'

import $ from 'jquery'
import controlCollisions from './controlCollisions'
import updateChain from './updateChain'

export default (actor, oldTile, newTile) => {
  $(oldTile).removeClass(actor)
  $(newTile).addClass(actor)

  // *** handles enemy class if needed *** //
  if (actor === 'lazy' || actor === 'active' || actor === 'scary') {
    $(oldTile).removeClass('enemy')
    $(newTile).addClass('enemy')
  }

  controlCollisions(newTile, oldTile)
  if (actor === 'player') updateChain(oldTile)
}