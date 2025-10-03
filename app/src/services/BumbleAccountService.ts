import { IAccountChecker, AccountStatus } from './types';
import { mockAccountLookup } from '../utils/mockBackend';

export class BumbleAccountService implements IAccountChecker {
  async check(username: string): Promise<AccountStatus> {
    return mockAccountLookup('bumble', username);
  }
}
