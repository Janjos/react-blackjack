import { actionTypes } from './actionTypes'

export function startGame () {
  return {
    type: actionTypes.START_GAME
  }
}

export function playerGetCards (numberOfCards) {
  return {
    type: actionTypes.PLAYER_GET_CARDS,
    payload: numberOfCards
  }
}

export function enemyGetCards (numberOfCards) {
  return {
    type: actionTypes.ENEMY_GET_CARDS,
    payload: numberOfCards
  }
}

export function removeCard (cardId) {
  return {
    type: actionTypes.REMOVE_CARD,
    payload: cardId
  }
}

export function playerWin () {
  return {
    type: actionTypes.WIN
  }
}

export function playerLose () {
  return {
    type: actionTypes.LOSE
  }
}

export function playerStand () {
  return {
    type: actionTypes.STAND
  }
}

export function playerDraw () {
  return {
    type: actionTypes.DRAW
  }
}

export function buttonsState (buttonState) {
  return {
    type: actionTypes.BUTTONS_ENABLED,
    payload: buttonState
  }
}

export function makeBet (betValue) {
  return {
    type: actionTypes.MAKE_BET,
    payload: betValue
  }
}

export function updatePlayerMoney (value) {
  return {
    type: actionTypes.UPDATE_MONEY,
    payload: value
  }
}

export function resetGameResult () {
  return {
    type: actionTypes.RESET_GAME_RESULT
  }
}

export function resetCards () {
  return {
    type: actionTypes.RESET_GAME_CARDS
  }
}
