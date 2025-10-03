import { AppIdentifier, AccountStatus } from '../services/types';

const mockDatabase: Record<AppIdentifier, Set<string>> = {
  tinder: new Set(['joaodasilva', 'maria.active', 'lovebird']),
  bumble: new Set(['carla23', 'paulo.dev', 'searching']),
  badoo: new Set(['aventura', 'vidaativa']),
  eden: new Set(['faithfulheart']),
  salt: new Set(['blessedlife']),
  quimicaCrista: new Set(['irmaluz'])
};

const simulateDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockAccountLookup = async (app: AppIdentifier, username: string): Promise<AccountStatus> => {
  await simulateDelay(600 + Math.random() * 600);
  const normalized = username.trim().toLowerCase();
  const exists = mockDatabase[app].has(normalized);
  return exists ? 'Ativa' : 'Não encontrada';
};
