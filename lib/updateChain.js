import $ from 'jquery'

export default (newTile) => {
  let cellChain = window.cellChain
  let previousTile
  for (let i = 0; i < cellChain.length; i++) {
    $(cellChain[i]).removeClass('chain')
    $(newTile).addClass('chain')
    previousTile = cellChain[i]
    cellChain[i] = $(newTile)
    newTile = previousTile
  }
}