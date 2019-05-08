import { initialState } from '../../constants/data/initialState'
import { actionTypes } from '../actions/actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return Object.assign({}, state, {
        gameRunning: true
      })
    case actionTypes.STAND:
      return Object.assign({}, state, {
        playerStand: true
      })
    case actionTypes.BUTTONS_ENABLED:
      return Object.assign({}, state, {
        buttonsEnabled: action.payload
      })
    case actionTypes.MAKE_BET:
      return Object.assign({}, state, {
        betValue: action.payload
      })
    default:
      return state
  }
}
