import React from 'react';
import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useTranslation } from 'react-i18next';
import { HistoryItem } from '../stores/historyStore';
import { formatDateTime } from '../utils/formatDate';

interface HistoryListProps {
  data: HistoryItem[];
  locale: string;
}

const HistoryList: React.FC<HistoryListProps> = ({ data, locale }) => {
  const { t } = useTranslation();

  if (data.length === 0) {
    return (
      <View className="mt-12 items-center">
        <Text className="text-base text-[#6B7280] font-inter">{t('history.empty')}</Text>
      </View>
    );
  }

  return (
    <FlashList
      data={data}
      estimatedItemSize={72}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="mb-4 rounded-4xl border border-[#1F2A44] bg-[#12172A] p-4">
          <Text className="text-sm text-[#9CA3AF] font-inter">{formatDateTime(item.timestamp, locale)}</Text>
          <Text className="mt-1 text-lg font-semibold text-white font-inter">{item.username}</Text>
          <Text className="text-sm text-[#D1D5DB] font-inter">{t(`apps.${item.app}`)}</Text>
          <Text className={`mt-2 text-base font-semibold font-inter ${item.status === 'Ativa' ? 'text-[#34D399]' : 'text-[#F87171]'}`}>
            {t(item.status === 'Ativa' ? 'result.active' : 'result.notFound')}
          </Text>
        </View>
      )}
    />
  );
};

export default HistoryList;
