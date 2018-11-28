import { combineReducers } from 'redux';
import dashboards from './dashboards';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  dashboards,
  loading: loadingBarReducer,
});