import $ from 'jquery'

export default (newTile, enemyID) => {
  let cellChain = window.cellChain
  let chainClass = 'chain'
  let previousTile

  for (let i = 0; i < cellChain.length; i++) {
    if (enemyID) {
      chainClass = 'enemyChain'
      cellChain = window[enemyID]
    } else {
      $('#chainBonus').html(window.cellChain.length)
    }
    $(cellChain[i]).removeClass(chainClass)
    $(newTile).addClass(chainClass)
    previousTile = cellChain[i]
    cellChain[i] = $(newTile)
    newTile = previousTile
  }
}