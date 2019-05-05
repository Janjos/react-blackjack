import { put, takeEvery, select } from 'redux-saga/effects'
import { actionTypes } from './actions/actionTypes'
import gameLogic from '../gameLogic'
import { playerLose, playerWin, playerGetCards, enemyGetCards } from './actions'

export default function * root () {
  yield takeEvery(actionTypes.PLAYER_GET_CARDS, endTurn)
  yield takeEvery(actionTypes.ENEMY_GET_CARDS, endTurn)
  yield takeEvery(actionTypes.START_GAME, startGame)
}

function * startGame () {
  yield put(playerGetCards(2))
  yield put(enemyGetCards(2))
}

function * endTurn () {
  const state = yield select()

  const gameResult = yield gameLogic.endTurn(
    state.cards.playerCards,
    state.cards.enemyCards
  )

  if (gameResult.win) yield put(playerWin())
  if (gameResult.lose) yield put(playerLose())
}
