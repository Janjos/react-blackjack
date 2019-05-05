import { GameResult } from './classes/GameResult'

export default {
  endTurn: (playerCards, enemyCards) => {
    return checkGameConditions(playerCards, enemyCards)
  },
  enemyWillHit: (playerCards, enemyCards) => {
    const playerPoints = sumAllCards(playerCards)
    const enemyPoints = sumAllCards(enemyCards)

    if (enemyPoints < playerPoints) {
      return true
    }
  },
  enemyStand: enemyStand
}

function sumAllCards (cards) {
  return cards.reduce((sum, card) => sum + card.value, 0)
}

function enemyStand (playerPoints, enemyPoints) {
  let result = new GameResult(false, false, false)
  result.win = playerPoints > enemyPoints && playerPoints <= 21
  result.lose = enemyPoints > playerPoints && enemyPoints <= 21
  result.draw = playerPoints === enemyPoints

  return { result: result }
}

function checkGameConditions (playerCards, enemyCards) {
  const playerPoints = sumAllCards(playerCards)
  const enemyPoints = sumAllCards(enemyCards)
  let result = new GameResult(false, false, false)

  result.win = playerPoints === 21 || enemyPoints > 21
  result.lose = enemyPoints === 21 || playerPoints > 21

  return { result, playerPoints, enemyPoints }
}

function removeCardfromPile (cards, cardId) {
  return cards.filter(card => card.id !== cardId)
}

export function getRandomCards (cards, numOfCards) {
  let cardIndex = 0
  let cardsToPush = []

  for (let i = 0; i < numOfCards; i++) {
    cardIndex = Math.random() * cards.length
    cardIndex = Math.floor(cardIndex)
    const cardToPush = cards[cardIndex]
    cardsToPush.push(cardToPush)
    cards = removeCardfromPile(cards, cardToPush.id)
  }

  return { cards: cards, cardsToPush: cardsToPush }
}
