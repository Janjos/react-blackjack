import { initialState } from '../../constants/data/initialState'
import { actionTypes } from '../actions/actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WIN:
      console.log('WIN')
      return Object.assign({}, state, {
        won: true
      })

    case actionTypes.LOOSE:
      console.log('LOOSE')
      return Object.assign({}, state, {
        loose: true
      })

    default:
      return state
  }
}
