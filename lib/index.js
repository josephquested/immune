'use strict'
import $ from 'jquery'
import generateBoard from './generateBoard'
import spawnPlayer from './spawnPlayer'
import controlPlayerMovement from './controlPlayerMovement'
import controlEnemySpawn from './controlEnemySpawn'
import controlCellSpawn from './controlCellSpawn'
import initTimer from './initTimer'
import controlScore from './controlScore'
import initCellChain from './initCellChain'
import returnPathToPlayer from './returnPathToPlayer'
import spawnEnemy from './spawnEnemy'
import activeController from './activeController'

$(() => {
  initTimer()
  window.chains = {}
  initCellChain()
  generateBoard(21)
  spawnPlayer($('#tile_0_10'))
  controlPlayerMovement('south')
  controlEnemySpawn()
  controlCellSpawn()
  controlScore()
  // activeController(spawnEnemy('active', $('#tile_10_10')), true)
})

/* bugs:
an active enemy hit my single cell chain as I was moving forward, from behind, and the active peice of my tail fell off and stayed bright green.
*/