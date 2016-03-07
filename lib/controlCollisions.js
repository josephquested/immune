'use strict'

import $ from 'jquery'
import gameOver from './gameOver'
import sliceChain from './sliceChain'
import wipeTileClass from './wipeTileClass'
import spawnEnemy from './spawnEnemy'
import activeController from './activeController'

export default (tile, previousTile) => {

  // *** handles gameover conditions *** //
  if ($(tile).hasClass('player') && $(tile).hasClass('enemy')) { gameOver() }

  // *** handles chain conditions *** //
  if ($(tile).hasClass('player')) {
    if ($(tile).hasClass('chain') || $(tile).hasClass('enemyChain')) {
      gameOver()
    }
  }

  if ($(tile).hasClass('enemy')) {
    if ($(tile).hasClass('chain') || $(tile).hasClass('enemyChain')) {
      wipeTileClass(tile)

      if ($(tile).hasClass('enemyChain')) {
        let keys = Object.keys(window.chains)
        let foundEnemyID
        keys.forEach((key) => {
          window[key].forEach((enemyTile) => {
            if (enemyTile === tile) {
              foundEnemyID = key
              sliceChain(tile)
            }
          })
        })
        sliceChain(tile, foundEnemyID)
        return
      }

      sliceChain(tile)
    }
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
    var enemyID = $(tile).attr('class').split(/\s+/)[1]
    window[enemyID].unshift($(tile).attr('id'))
  }

  // *** handles active enemy transformation *** //
  if ($(tile).hasClass('lazy') && $(tile).hasClass('cell')) {
    wipeTileClass(tile)
    activeController(spawnEnemy('active', $(tile)), true)
  }
}


