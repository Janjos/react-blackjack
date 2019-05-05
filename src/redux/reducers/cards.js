import { initialState } from '../../constants/data/initialState'
import { actionTypes } from '../actions/actionTypes'
import gameLogic, { getRandomCards } from '../../gameLogic'

export default (state = initialState, action) => {
  const { cards, cardsToPush } = getRandomCards(state.cardList, action.payload)

  switch (action.type) {
    case actionTypes.PLAYER_GET_CARDS:
      return Object.assign({}, state, {
        playerCards: [...state.playerCards, ...cardsToPush],
        cardList: cards
      })

    case actionTypes.ENEMY_GET_CARDS:
      return Object.assign({}, state, {
        enemyCards: [...state.enemyCards, ...cardsToPush],
        cardList: cards
      })

    case actionTypes.REMOVE_CARDS:
      return Object.assign({}, state, {
        cards: gameLogic.removeCardfromPile(state.cardList, action.payload)
      })

    default:
      return state
  }
}
