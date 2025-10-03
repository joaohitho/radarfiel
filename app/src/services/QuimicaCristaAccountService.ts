import { IAccountChecker, AccountStatus } from './types';
import { mockAccountLookup } from '../utils/mockBackend';

export class QuimicaCristaAccountService implements IAccountChecker {
  async check(username: string): Promise<AccountStatus> {
    return mockAccountLookup('quimicaCrista', username);
  }
}
