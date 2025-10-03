export type AccountStatus = 'Ativa' | 'Não encontrada';

export type AppIdentifier =
  | 'tinder'
  | 'bumble'
  | 'badoo'
  | 'eden'
  | 'salt'
  | 'quimicaCrista';

export interface IAccountChecker {
  check: (username: string) => Promise<AccountStatus>;
}
