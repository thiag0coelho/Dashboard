import { recebeDadosIniciais } from '../utils/api';
import { recebeDashboards } from './dashboards';
import { showLoading, hideLoading } from 'react-redux-loading';

export default function handleRecebeDadosIniciais() {
  return dispatch => {
    dispatch(showLoading());
    recebeDadosIniciais()
    .then(({ dashboards }) => {
      dispatch(recebeDashboards(dashboards));
      dispatch(hideLoading());
    });
  }
}
