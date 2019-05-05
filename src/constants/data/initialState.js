import cardList from '../data/cardList'

export const initialState = {
  cards: {
    cardList: cardList,
    playerCards: [],
    enemyCards: []
  },
  player: {
    money: 1000,
    won: false,
    loose: false
  }
}
