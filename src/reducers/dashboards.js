import { RECEBE_DASHBOARDS } from '../actions/dashboards'

export default function dashboards (state = {}, action) {
  switch(action.type) {
    case RECEBE_DASHBOARDS :
      return {
        ...state,
        ...action.dashboards
      }
    default :
      return state
  }
}