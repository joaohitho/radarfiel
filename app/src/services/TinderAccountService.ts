import { IAccountChecker, AccountStatus } from './types';
import { mockAccountLookup } from '../utils/mockBackend';

export class TinderAccountService implements IAccountChecker {
  async check(username: string): Promise<AccountStatus> {
    return mockAccountLookup('tinder', username);
  }
}
