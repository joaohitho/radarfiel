import { IAccountChecker, AccountStatus } from './types';
import { mockAccountLookup } from '../utils/mockBackend';

export class EdenAccountService implements IAccountChecker {
  async check(username: string): Promise<AccountStatus> {
    return mockAccountLookup('eden', username);
  }
}
