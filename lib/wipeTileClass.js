'use strict'
import $ from 'jquery'

export default (tile) => {
    $(tile).removeClass('cell')
    $(tile).removeClass('enemy')
    $(tile).removeClass('lazy')
    $(tile).removeClass('active')
    $(tile).removeClass('scary')
}


