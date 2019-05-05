import { combineReducers } from 'redux'
import cardsReducer from './cards'
import playerReducer from './player'
import gameReducer from './game'

export default combineReducers({
  cards: cardsReducer,
  player: playerReducer,
  game: gameReducer
})
