'use strict'

import $ from 'jquery'
import gameOver from './gameOver'

export default (tile) => {
  if ($(tile).hasClass('player') && $(tile).hasClass('enemy')) gameOver()
}

