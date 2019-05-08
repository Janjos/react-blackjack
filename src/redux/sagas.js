import { put, takeEvery, select, delay } from 'redux-saga/effects'
import { actionTypes } from './actions/actionTypes'
import gameLogic from '../gameLogic'
import {
  playerLose,
  playerWin,
  playerGetCards,
  enemyGetCards,
  playerDraw,
  buttonsState,
  makeBet,
  updatePlayerMoney,
  resetGameResult,
  resetCards,
  playerStand
} from './actions'
import { endGameDelay, cardAnimationTime } from '../constants/animations'

export default function * root () {
  yield takeEvery(actionTypes.PLAYER_GET_CARDS, endTurn)
  yield takeEvery(actionTypes.ENEMY_GET_CARDS, endTurn)
  yield takeEvery(actionTypes.START_GAME, startGame)
  yield takeEvery(actionTypes.STAND, enemyTurn)
  yield takeEvery(actionTypes.WIN, endGame)
  yield takeEvery(actionTypes.LOSE, endGame)
  yield takeEvery(actionTypes.DRAW, endGame)
}

function * startGame () {
  yield put(playerGetCards(2))
  yield put(enemyGetCards(2))
}

function * endTurn (action) {
  yield put(buttonsState(false))

  const state = yield select()
  const playerCards = state.cards.playerCards
  const enemyCards = state.cards.enemyCards

  let gameResult = yield gameLogic.endTurn(playerCards, enemyCards)

  // Delay to create more friendly gameplay
  yield delay(endGameDelay)

  if (gameResult.result.win) yield put(playerWin())
  if (gameResult.result.lose) yield put(playerLose())

  if (action.type === actionTypes.PLAYER_GET_CARDS) {
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

  if (gameResult.result.win) yield put(playerWin())
  if (gameResult.result.lose) yield put(playerLose())
  if (gameResult.result.draw) yield put(playerDraw())
}

function * enemyTurn () {
  yield put(buttonsState(false))

  let state = yield select()
  let enemyWillHit = gameLogic.enemyWillHit(
    state.cards.playerCards,
    state.cards.enemyCards
  )

  while (enemyWillHit) {
    // Delay to create more friendly gameplay
    yield delay(cardAnimationTime)

    yield put(enemyGetCards(1))
    state = yield select()
    enemyWillHit = yield gameLogic.enemyWillHit(
      state.cards.playerCards,
      state.cards.enemyCards
    )
  }

  yield finalTurn()
}

function * endGame () {
  let state = yield select()

  if (state.player.result.win) {
    yield put(updatePlayerMoney(state.game.betValue + state.player.money))
  } else if (state.player.result.lose) {
    yield put(updatePlayerMoney(state.player.money + (0 - state.game.betValue)))
  }

  yield resetGame()
}

function * resetGame () {
  yield put(buttonsState(true))
  yield put(playerStand(false))

  yield delay(endGameDelay * 2)
  yield put(resetCards())
  yield delay(cardAnimationTime)
  yield put(resetGameResult())
  yield put(makeBet(0))

  yield startGame()
}
