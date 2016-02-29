'use strict'

import $ from 'jquery'
import generateBoard from './generateBoard'
import spawnPlayer from './spawnPlayer'
import controlPlayerMovement from './controlPlayerMovement'
import controlEnemySpawn from './controlEnemySpawn'
import controlCellSpawn from './controlCellSpawn'
import runTimer from './runTimer'
import initCellChain from './initCellChain'

$(() => {
  runTimer()
  generateBoard(21)
  spawnPlayer($('#tile_0_10'))
  controlPlayerMovement('south')
  controlCellSpawn()
  controlEnemySpawn()
  initCellChain()
})