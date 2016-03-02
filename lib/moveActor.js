'use strict'

import $ from 'jquery'
import controlCollisions from './controlCollisions'
import updateChain from './updateChain'
import wipeTileClass from './wipeTileClass'

export default (actor, oldTile, newTile) => {
  $(oldTile).removeClass(actor)
  $(newTile).addClass(actor)

  // *** handles enemy class if needed *** //
  if (actor === 'lazy' || actor === 'active') {
    $(oldTile).removeClass('enemy')

    // *** handles enemy collisions *** //
    if ($(newTile).hasClass('enemy')) {
      wipeTileClass($(newTile))
      $(newTile).addClass('cell')
      return
    }

    $(newTile).addClass('enemy')
  }

  controlCollisions(newTile, oldTile)
  if (actor === 'player') updateChain(oldTile)
}