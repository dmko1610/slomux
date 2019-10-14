import { CHANGE_INTERVAL } from './actionTypes'

export default (state, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      return {
        ...state,
        interval: action.payload
      }
    default:
      return state
  }
}
