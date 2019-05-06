import { put, takeEvery, select, delay } from 'redux-saga/effects'
import { actionTypes } from './actions/actionTypes'
import gameLogic from '../gameLogic'
import {
  playerLose,
  playerWin,
  playerGetCards,
  enemyGetCards,
  playerDraw
} from './actions'

export default function * root () {
  yield takeEvery(actionTypes.PLAYER_GET_CARDS, endTurn)
  yield takeEvery(actionTypes.ENEMY_GET_CARDS, endTurn)
  yield takeEvery(actionTypes.START_GAME, startGame)
  yield takeEvery(actionTypes.STAND, enemyTurn)
}

function * startGame () {
  yield put(playerGetCards(2))
  yield put(enemyGetCards(2))
}

function * endTurn () {
  const state = yield select()
  const playerCards = state.cards.playerCards
  const enemyCards = state.cards.enemyCards

  let gameResult = yield gameLogic.endTurn(playerCards, enemyCards)

  // Delay to create more friendly gameplay
  yield delay(800)

  if (gameResult.result.win) yield put(playerWin())
  if (gameResult.result.lose) yield put(playerLose())
}

function * finalTurn () {
  const state = yield select()
  // Delay to create more friendly gameplay
  yield delay(800)

  let gameResult = yield gameLogic.endTurn(
    state.cards.playerCards,
    state.cards.enemyCards
  )
  gameResult = yield gameLogic.enemyStand(
    gameResult.playerPoints,
    gameResult.enemyPoints
  )

  if (gameResult.result.win) yield put(playerWin())
  if (gameResult.result.lose) yield put(playerLose())
  if (gameResult.result.draw) yield put(playerDraw())
}

function * enemyTurn () {
  let state = yield select()
  let enemyWillHit = gameLogic.enemyWillHit(
    state.cards.playerCards,
    state.cards.enemyCards
  )

  while (enemyWillHit) {
    // Delay to create more friendly gameplay
    yield delay(500)

    yield put(enemyGetCards(1))
    state = yield select()
    enemyWillHit = yield gameLogic.enemyWillHit(
      state.cards.playerCards,
      state.cards.enemyCards
    )
  }

  yield finalTurn()
}
