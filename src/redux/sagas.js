import { put, takeEvery, select } from 'redux-saga/effects'
import { actionTypes } from './actions/actionTypes'
import gameLogic from '../gameLogic'
import { playerLose, playerWin } from './actions'

export default function * root () {
  yield takeEvery(actionTypes.PLAYER_GET_CARDS, callEndTurn)
  yield takeEvery(actionTypes.ENEMY_GET_CARDS, callEndTurn)

  function * callEndTurn () {
    const state = yield select()

    const gameResult = yield gameLogic.endTurn(
      state.cards.playerCards,
      state.cards.enemyCards
    )

    if (gameResult.win) yield put(playerWin())
    if (gameResult.lose) yield put(playerLose())
  }
}
