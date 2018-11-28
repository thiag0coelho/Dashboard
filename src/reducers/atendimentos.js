import { RECEBE_ATENDIMENTOS } from '../actions/atendimentos';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEBE_ATENDIMENTOS:
      return {
        ...state,
        ...action.atendimentos,
      };
    default:
      return state;
  }
}