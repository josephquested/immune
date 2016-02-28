'use strict'

export default (score) => {
  // *** uncomment to display score on death *** //
  console.log('GAME OVER')
  alert('immune system compromised! score: ' + score)
  location.reload()
}