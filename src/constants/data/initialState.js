import cardList from '../data/cardList'
import { GameResult } from '../../classes/GameResult'

export const initialState = {
  cards: {
    cardList: cardList,
    playerCards: [],
    enemyCards: []
  },
  player: {
    money: 1000,
    result: new GameResult(false, false)
  },
  game: {
    gameRunning: false,
    playerStand: false
  }
}
