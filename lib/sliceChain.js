import $ from 'jquery'

export default (tile, enemyID) => {
  let cellChain
  if (!enemyID) {
    cellChain = window.cellChain
  } else {
    cellChain = window[enemyID]
  }
  let sliceIndex

  cellChain.forEach((cell, i) => {
    if ($(cell).attr('id') === $(tile).attr('id')) {
      sliceIndex = i; return }})

  let deadChain = cellChain.slice(sliceIndex)
  window.cellChain = cellChain.slice(0, sliceIndex)
  deadChain.forEach((cell) => {
    if (enemyID) $(cell).removeClass('enemyChain')
    if (!enemyID) $(cell).removeClass('chain')
    $(cell).addClass('cell')
  })
}