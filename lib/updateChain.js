import $ from 'jquery'

export default (newTile, enemyID) => {
  let cellChain
  let chainClass
  let previousTile

  if (!enemyID) {
  cellChain = window.cellChain
  chainClass = 'chain'
  } else {
    cellChain = window[enemyID]
    chainClass = 'enemyChain'
  }

  for (let i = 0; i < cellChain.length; i++) {
    if (!enemyID) $('#chainBonus').html(window.cellChain.length)
    $(cellChain[i]).removeClass(chainClass)
    $(newTile).addClass(chainClass)
    previousTile = cellChain[i]
    cellChain[i] = $(newTile)
    newTile = previousTile

    if (enemyID) {
      window.chains[enemyID].chain = window[enemyID]
    }
  }
}