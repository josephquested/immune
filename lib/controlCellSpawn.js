'use strict'

import $ from 'jquery'
import returnRandomTile from './returnRandomTile'
import spawnCell from './spawnCell'

export default () => {
  let cellSpawnController = window.setInterval(() => {
    let gameTime = Number($('#score').html())
      if (!$('td').hasClass('cell')) {
      spawnCell(returnRandomTile())
      }
    }, 2000)
}


