'use strict'

import $ from 'jquery'
import generateBoard from './generateBoard'
import spawnPlayer from './spawnPlayer'
import controlPlayerMovement from './controlPlayerMovement'
import controlEnemySpawn from './controlEnemySpawn'
import runTimer from './runTimer'
import returnRandomTile from './returnRandomTile'
import spawnCell from './spawnCell'

$(() => {
  runTimer()
  generateBoard(21)
  spawnPlayer($('#tile_0_10'))
  controlPlayerMovement('south')
  controlEnemySpawn()
  spawnCell(returnRandomTile())
})