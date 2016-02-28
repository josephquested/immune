'use strict'

import $ from 'jquery'
import generateBoard from './generateBoard'
import generatePlayer from './generatePlayer'
import controlPlayerMovement from './controlPlayerMovement'
import movePlayer from './movePlayer'
import returnCellByDirection from './returnCellByDirection'

// const gameSpeed = 800
// let direction = 'south'

$(() => {
  generateBoard(21)
  generatePlayer($('#cell_0_10'))
  controlPlayerMovement('south')
})