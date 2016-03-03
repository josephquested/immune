'use strict'

import $ from 'jquery'
import gameOver from './gameOver'
import sliceChain from './sliceChain'
import wipeTileClass from './wipeTileClass'
import spawnEnemy from './spawnEnemy'
import activeController from './activeController'

export default (tile, previousTile) => {

  // *** handles gameover conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('enemy')) gameOver()

  // *** handles chain conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('chain')) gameOver()
  if ($(tile).hasClass('enemy') && $(tile).hasClass('chain')) {
    wipeTileClass(tile)
    sliceChain(tile)
  }

  // *** handles cell conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('cell')) {
    $(tile).removeClass('cell')
    $(tile).addClass('chain')
    window.cellChain.unshift($(tile).attr('id'))
  }

  if ($(tile).hasClass('active') && $(tile).hasClass('cell')) {
    $(tile).removeClass('cell')
    $(tile).addClass('enemyChain')
    console.log('enemy converted cell into enemychain!')
    // GET A REFERENCE TO THE ENEMY'S DESTINCTIVE CLASS SOMEHOW
    // window.cellChain.unshift($(tile).attr('id'))
  }

  // *** handles active enemy transformation *** //
  if ($(tile).hasClass('lazy') && $(tile).hasClass('cell')) {
    wipeTileClass(tile)
    console.log('ACTIVE ENEMY CREATED')
    activeController(spawnEnemy('active', $(tile)), true)
  }
}


