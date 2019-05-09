import { put, takeEvery, select, delay } from 'redux-saga/effects'
import { actionTypes } from './actions/actionTypes'
import gameLogic from '../gameLogic'
import {
  playerGetCards,
  enemyGetCards,
  buttonsState,
  makeBet,
  updatePlayerMoney,
  resetGameResult,
  resetCards,
  enemyGetCard,
  updateGameResult
} from './actions'
import { endGameDelay, cardAnimationTime } from '../constants/animations'
import { GameResult } from '../classes/GameResult'

export default function * root () {
  yield takeEvery(actionTypes.PLAYER_GET_CARD, endTurn)
  yield takeEvery(actionTypes.ENEMY_GET_CARD, endTurn)
  yield takeEvery(actionTypes.START_GAME, startGame)
  yield takeEvery(actionTypes.STAND, enemyTurn)
  yield takeEvery(actionTypes.UPDATE_GAME_RESULT, endGame)
}

function * startGame () {
  yield put(buttonsState(true))

  const state = yield select()
  const playerCards = state.cards.playerCards
  const enemyCards = state.cards.enemyCards

  if (playerCards.length === 0) yield put(playerGetCards(2))
  if (enemyCards.length === 0) yield put(enemyGetCards(2))
}

function * endTurn (action) {
  yield put(buttonsState(false))

  const state = yield select()
  const playerCards = state.cards.playerCards
  const enemyCards = state.cards.enemyCards

  let gameResult = yield gameLogic.endTurn(playerCards, enemyCards)

  // Delay to create more friendly gameplay
  yield delay(endGameDelay)

  if (gameResult.result.win) {
    yield put(updateGameResult(new GameResult(true, false, false)))
  } else if (gameResult.result.lose) {
    yield put(updateGameResult(new GameResult(false, true, false)))
  }

  if (action.type === actionTypes.PLAYER_GET_CARD) {
    yield put(buttonsState(true))
  }
}

function * finalTurn () {
  yield put(buttonsState(false))

  const state = yield select()
  // Delay to create more friendly gameplay
  yield delay(endGameDelay)

  let gameResult = yield gameLogic.endTurn(
    state.cards.playerCards,
    state.cards.enemyCards
  )
  gameResult = yield gameLogic.enemyStand(
    gameResult.playerPoints,
    gameResult.enemyPoints
  )

  if (gameResult.result.win) {
    yield put(updateGameResult(new GameResult(true, false, false)))
  } else if (gameResult.result.lose) {
    yield put(updateGameResult(new GameResult(false, true, false)))
  } else if (gameResult.result.draw) {
    yield put(updateGameResult(new GameResult(false, false, true)))
  }
}

function * enemyTurn () {
  yield put(buttonsState(false))

  let state = yield select()
  let enemyWillHit = yield gameLogic.enemyWillHit(
    state.cards.playerCards,
    state.cards.enemyCards
  )

  while (enemyWillHit) {
    // Delay to create more friendly gameplay
    yield delay(cardAnimationTime)

    yield put(enemyGetCard())
    state = yield select()
    enemyWillHit = yield gameLogic.enemyWillHit(
      state.cards.playerCards,
      state.cards.enemyCards
    )
  }

  yield * finalTurn()
}

function * endGame () {
  let state = yield select()

  if (state.player.result.win) {
    yield put(updatePlayerMoney(state.game.betValue + state.player.money))
  } else if (state.player.result.lose) {
    yield put(updatePlayerMoney(state.player.money + (0 - state.game.betValue)))
  }

  yield * resetGame()
}

function * resetGame () {
  yield delay(endGameDelay * 2)

  yield put(resetCards())

  yield delay(cardAnimationTime)

  yield put(makeBet(0))
  yield delay(100)
  yield put(resetGameResult())

  yield * startGame()
}
