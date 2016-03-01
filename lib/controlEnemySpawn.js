import $ from 'jquery'
import spawnEnemy from './spawnEnemy'
import lazyController from './lazyController'

let spawning = false
let spawnStart = 1
let spawnFrequency = 1600

export default () => {
  let enemySpawnController = window.setInterval(() => {
    let gameTime = Number($('#timer').html())

    // *** lazy enemy controller *** //
    if (gameTime > spawnStart && !spawning) {
      spawning = true
      let spawnController = window.setInterval(() => {
      lazyController(spawnEnemy('lazy'), true)
      }, spawnFrequency)
    }
  }, 500)
}


