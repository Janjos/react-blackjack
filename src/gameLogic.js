export default {
  endTurn: (playerCards, enemyCards) => {
    return checkGameConditions(playerCards, enemyCards)
  }
}

function sumAllCards (cards) {
  return cards.reduce((sum, card) => sum + card.value, 0)
}

function checkGameConditions (playerCards, enemyCards) {
  const playerPoints = sumAllCards(playerCards)
  const enemyPoints = sumAllCards(enemyCards)
  let result = { win: false, loose: false }
  console.log(playerPoints, enemyPoints)

  if (playerPoints === 21 || enemyPoints > 21) {
    result.win = true
  } else if (enemyPoints === 21 || playerPoints > 21) {
    result.loose = true
  }

  return result
}
