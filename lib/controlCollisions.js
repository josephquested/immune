'use strict'

import $ from 'jquery'
import gameOver from './gameOver'
import sliceChain from './sliceChain'

export default (tile, previousTile) => {
  // *** handles gameover conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('enemy')) gameOver()

  // *** handles chain conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('chain')) gameOver()
  if ($(tile).hasClass('enemy') && $(tile).hasClass('chain')) {
    $(tile).removeClass('cell')
    $(tile).removeClass('enemy')
  }

  // *** handles cell conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('cell')) {
    $(tile).removeClass('cell')
    $(tile).addClass('chain')
    window.cellChain.unshift($(tile).attr('id'))
  }
}


