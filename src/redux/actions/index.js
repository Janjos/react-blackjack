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

export function disableButton (buttonState) {
  return {
    type: actionTypes.DISABLE_BUTTONS,
    payload: buttonState
  }
}
