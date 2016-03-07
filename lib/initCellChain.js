export default (enemyID) => {
  if (enemyID) {
    window[enemyID] = []
    window.chains[enemyID] = {}
    window.chains[enemyID]['chain'] = []
    console.log('enemy chains ', window.chains)
    return
  }

  window.cellChain = []
}



