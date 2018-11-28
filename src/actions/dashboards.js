export const RECEBE_DASHBOARDS = 'RECEBE_DASHBOARDS';

export function recebeDashboards(dashboards) {
  return {
    type: RECEBE_DASHBOARDS,
    dashboards,
  };
}