import $ from 'jquery'

export default (tile) => {
  let cellChain = window.cellChain
  let sliceIndex

  cellChain.forEach((cell, i) => {
    if ($(cell).attr('id') === $(tile).attr('id')) {
      sliceIndex = i; return }})

  let deadChain = cellChain.slice(sliceIndex)
  window.cellChain = cellChain.slice(0, sliceIndex)
  deadChain.forEach((cell) => {
    $(cell).removeClass('chain')
    $(cell).addClass('cell')
  })
}