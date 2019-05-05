import { combineReducers } from 'redux'
import cardsReducer from './cards'
import playerReducer from './player'

export default combineReducers({
  cards: cardsReducer,
  player: playerReducer
})
