'use strict'

import $ from 'jquery'
import gameOver from './gameOver'
import sliceChain from './sliceChain'
import wipeTileClass from './wipeTileClass'

export default (tile, previousTile) => {

  // *** handles gameover conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('enemy')) gameOver()

  // *** handles chain conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('chain')) gameOver()
  if ($(tile).hasClass('enemy') && $(tile).hasClass('chain')) {
    wipeTileClass(tile)
    sliceChain(tile)
  }

  // *** handles cell conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('cell')) {
    $(tile).removeClass('cell')
    $(tile).addClass('chain')
    window.cellChain.unshift($(tile).attr('id'))
  }

  // *** THIS IS WHERE ACTIVE TRANSFORMATION WILL TAKE PLACE *** //
  if ($(tile).hasClass('enemy') && $(tile).hasClass('cell')) {
    console.log('enemy consumed cell')
    wipeTileClass(tile)
  }

  // *** handles enemy conditions *** //
}


