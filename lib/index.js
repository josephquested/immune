'use strict'

import $ from 'jquery'
import generateBoard from './generateBoard'
import generatePlayer from './generatePlayer'
import controlPlayerMovement from './controlPlayerMovement'

$(() => {
  generateBoard(21)
  generatePlayer($('#cell_9_10'))
  controlPlayerMovement()
})