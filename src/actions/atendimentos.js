export const RECEBE_ATENDIMENTOS = 'RECEBE_ATENDIMENTOS';

export function recebeAtendimentos(atendimentos) {
  return {
    type: RECEBE_ATENDIMENTOS,
    atendimentos,
  };
}