import $ from 'jquery'
import movePlayer from './movePlayer'
import spawnEnemy from './spawnEnemy'
import returnCellByDirection from './returnCellByDirection'

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
      spawnEnemy('lazy')
      }, lazySpawnFrequency)
    }
  }, 500)
}

// set it moving away from the wall, then it moves randomly


