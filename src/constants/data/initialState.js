import cardList from '../data/cardList'
import { GameResult } from '../../classes/GameResult'

export const initialState = {
  cards: {
    cardList: cardList,
    playerCards: [],
    enemyCards: []
  },
  player: {
    money: 500,
    result: new GameResult(false, false, false)
  },
  game: {
    gameRunning: false,
    playerStand: false,
    buttonsEnabled: true,
    betValue: 0
  }
}
