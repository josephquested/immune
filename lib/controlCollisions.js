'use strict'

import $ from 'jquery'
import gameOver from './gameOver'

export default (tile, previousTile) => {
  // *** handles gameover conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('enemy')) gameOver()

  // *** handles chain conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('chain')) gameOver()

  // *** handles cell conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('cell')) {
    $(tile).removeClass('cell')
    $(tile).addClass('chain')
    window.cellChain.unshift($(tile).attr('id'))
  }
}


