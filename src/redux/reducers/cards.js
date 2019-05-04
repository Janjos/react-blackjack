import { initialState } from '../../constants/data/initialState'
import { actionTypes } from '../actions/actionTypes'

export default (state = initialState, action) => {
  const { cards, cardsToPush } = getRandomCards(state.cardList, action.payload)

  switch (action.type) {
    case actionTypes.USER_GET_CARDS:
      return Object.assign({}, state, {
        userCards: [...state.userCards, ...cardsToPush],
        cardList: cards
      })

    case actionTypes.ENEMY_GET_CARDS:
      return Object.assign({}, state, {
        enemyCards: [...state.enemyCards, ...cardsToPush],
        cardList: cards
      })

    case actionTypes.REMOVE_CARDS:
      return Object.assign({}, state, {
        cards: removeCard(state.cardList, action.payload)
      })

    default:
      return state
  }
}

function removeCard (cards, cardId) {
  return cards.filter(card => card.id !== cardId)
}

function getRandomCards (cards, numOfCards) {
  let cardIndex = 0
  let cardsToPush = []

  for (let i = 0; i < numOfCards; i++) {
    cardIndex = Math.random() * cards.length
    cardIndex = Math.floor(cardIndex)
    const cardToPush = cards[cardIndex]
    cardsToPush.push(cardToPush)
    cards = removeCard(cards, cardToPush.id)
  }

  return { cards: cards, cardsToPush: cardsToPush }
}
