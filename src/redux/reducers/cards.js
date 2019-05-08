import { initialState } from '../../constants/data/initialState'
import { actionTypes } from '../actions/actionTypes'
import gameLogic, { getRandomCards } from '../../gameLogic'

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYER_GET_CARDS: {
      const { cards, cardsToPush } = getRandomCards(
        state.cardList,
        action.payload
      )
      return Object.assign({}, state, {
        playerCards: [...state.playerCards, ...cardsToPush],
        cardList: cards
      })
    }

    case actionTypes.ENEMY_GET_CARDS: {
      const { cards, cardsToPush } = getRandomCards(
        state.cardList,
        action.payload
      )
      return Object.assign({}, state, {
        enemyCards: [...state.enemyCards, ...cardsToPush],
        cardList: cards
      })
    }

    case actionTypes.PLAYER_GET_CARD: {
      const { cards, cardsToPush } = getRandomCards(state.cardList, 1)
      return Object.assign({}, state, {
        playerCards: [...state.playerCards, ...cardsToPush],
        cardList: cards
      })
    }

    case actionTypes.ENEMY_GET_CARD: {
      const { cards, cardsToPush } = getRandomCards(state.cardList, 1)
      return Object.assign({}, state, {
        enemyCards: [...state.enemyCards, ...cardsToPush],
        cardList: cards
      })
    }

    case actionTypes.REMOVE_CARDS:
      return Object.assign({}, state, {
        cards: gameLogic.removeCardfromPile(state.cardList, action.payload)
      })

    case actionTypes.RESET_GAME_CARDS:
      return Object.assign({}, state, {
        cardList: initialState.cards.cardList,
        playerCards: [],
        enemyCards: []
      })

    default:
      return state
  }
}
