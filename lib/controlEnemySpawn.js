import $ from 'jquery'
import spawnEnemy from './spawnEnemy'
import lazyController from './lazyController'

let lazySpawning = false
let lazySpawnStart = 1
let lazySpawnFrequency = 3000

export default () => {
  let enemySpawnController = window.setInterval(() => {
    let gameTime = Number($('#score').html())

    // *** lazy enemy controller *** //
    if (gameTime > lazySpawnStart && !lazySpawning) {
      lazySpawning = true
      let lazySpawnController = window.setInterval(() => {
      lazyController(spawnEnemy('lazy'), 'lazy', true)
      }, lazySpawnFrequency)
    }
  }, 500)
}


