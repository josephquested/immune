'use strict'

import $ from 'jquery'
import generateBoard from './generateBoard'
import generatePlayer from './generatePlayer'
import controlPlayerMovement from './controlPlayerMovement'
import runTimer from './runTimer'

$(() => {
  generateBoard(21)
  generatePlayer($('#cell_0_10'))
  controlPlayerMovement('south')
  runTimer()
})