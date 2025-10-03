import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AppIdentifier, AccountStatus } from '../services/types';

export interface HistoryItem {
  id: string;
  username: string;
  app: AppIdentifier;
  status: AccountStatus;
  timestamp: number;
}

interface HistoryState {
  history: HistoryItem[];
  addEntry: (entry: Omit<HistoryItem, 'id' | 'timestamp'> & { timestamp?: number }) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      history: [],
      addEntry: (entry) =>
        set((state) => ({
          history: [
            {
              id: `${Date.now()}-${entry.username}-${entry.app}`,
              timestamp: entry.timestamp ?? Date.now(),
              ...entry
            },
            ...state.history
          ].slice(0, 50)
        })),
      clearHistory: () => set({ history: [] })
    }),
    {
      name: 'radarfiel-history',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
