'use strict'
import $ from 'jquery'
import returnTileByDirection from './returnTileByDirection'

export default (tile) => {
    if ($(tile).attr('id') ===  $(window.cellChain[0]).attr('id')
      || $(tile).attr('id') === $(window.cellChain[1]).attr('id')) {
      return true
    } else {
      return false
    }
}

