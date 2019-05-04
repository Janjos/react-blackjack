import { combineReducers } from 'redux'
import { cardsReducer } from './cards'

export default combineReducers({
  cards: cardsReducer
})
