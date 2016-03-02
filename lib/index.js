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
  // controlEnemySpawn()
  controlCellSpawn()
  controlScore()
  lazyController(spawnEnemy('lazy', $('#tile_10_10')), false)
})

