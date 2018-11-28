import {
  _recebeDashboards,
} from './_DATA.js'

export async function recebeDadosIniciais () {
  return Promise.all([
  _recebeDashboards(),
  ]).then(([dashboards]) => ({
    dashboards,
  }))
}