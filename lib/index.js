'use strict'

import $ from 'jquery'
import generateBoard from './generateBoard'
import spawnPlayer from './spawnPlayer'
import controlPlayerMovement from './controlPlayerMovement'
import controlEnemySpawn from './controlEnemySpawn'
import runTimer from './runTimer'
import returnRandomEdgeCell from './returnRandomEdgeCell'

$(() => {
  runTimer()
  generateBoard(21)
  spawnPlayer($('#cell_0_10'))
  controlPlayerMovement('south')
  controlEnemySpawn()
  returnRandomEdgeCell()
})