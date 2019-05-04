import { actionTypes } from './actionTypes'

export function userGetCards (numberOfCards) {
  return {
    type: actionTypes.USER_GET_CARDS,
    payload: numberOfCards
  }
}

export function removeCard (cardId) {
  return {
    type: actionTypes.REMOVE_CARD,
    payload: cardId
  }
}
