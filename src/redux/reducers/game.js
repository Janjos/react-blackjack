import { initialState } from '../../constants/data/initialState'
import { actionTypes } from '../actions/actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return Object.assign({}, state, {
        gameRunning: true
      })
    default:
      return state
  }
}
