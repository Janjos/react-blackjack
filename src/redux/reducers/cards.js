import { initialState } from '../../constants/data/initialState'
import { actionTypes } from '../actions/actionTypes'

export default (state = initialState, action) => {
  switch (action) {
    case actionTypes.USER_GET_CARDS:
      const { cards, cardsToPush } = getRandomCards(
        state.cards,
        action.payload
      ).cardsToPush
      return Object.assign({}, state, {
        userCards: [...state.userCards, ...cardsToPush],
        cards: cards
      })

    case actionTypes.REMOVE_CARDS:
      return Object.assign({}, state, {
        cards: removeCard(state.cards, action.payload)
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
    cardsToPush.push(cards[cardIndex])
    cards = removeCard(cards, cardsToPush.indexOf)
  }

  return { cards: cards, cardsToPush: cardsToPush }
}