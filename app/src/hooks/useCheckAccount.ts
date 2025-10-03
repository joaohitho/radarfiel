import { useCallback, useState } from 'react';
import { createAccountChecker } from '../factories/accountCheckerFactory';
import { AccountStatus, AppIdentifier } from '../services/types';
import { useHistoryStore } from '../stores/historyStore';

interface UseCheckAccountResult {
  isLoading: boolean;
  status: AccountStatus | null;
  checkAccount: (app: AppIdentifier, username: string) => Promise<AccountStatus>;
}

export const useCheckAccount = (): UseCheckAccountResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<AccountStatus | null>(null);
  const addEntry = useHistoryStore((state) => state.addEntry);

  const checkAccount = useCallback(
    async (app: AppIdentifier, username: string) => {
      setIsLoading(true);
      setStatus(null);
      try {
        const checker = createAccountChecker(app);
        const result = await checker.check(username);
        setStatus(result);
        addEntry({ app, status: result, username });
        return result;
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error('Unexpected error while checking the account.');
      } finally {
        setIsLoading(false);
      }
    },
    [addEntry]
  );

  return {
    isLoading,
    status,
    checkAccount
  };
};
