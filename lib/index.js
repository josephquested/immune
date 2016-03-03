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
import lazyController from './lazyController'


$(() => {
  initTimer()
  initCellChain()
  generateBoard(21)
  spawnPlayer($('#tile_0_10'))
  controlPlayerMovement('south')
  controlEnemySpawn()
  controlCellSpawn()
  controlScore()
})

/* bugs:
an active enemy hit my single cell chain as I was moving forward, from behind, and the active peice of my tail fell off and stayed bright green.
enemies move at random when they are equally far from you on the X and Y axis, they should just pick a direction and move further towards you.
*/