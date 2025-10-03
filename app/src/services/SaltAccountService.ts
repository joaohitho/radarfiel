import { IAccountChecker, AccountStatus } from './types';
import { mockAccountLookup } from '../utils/mockBackend';

export class SaltAccountService implements IAccountChecker {
  async check(username: string): Promise<AccountStatus> {
    return mockAccountLookup('salt', username);
  }
}
