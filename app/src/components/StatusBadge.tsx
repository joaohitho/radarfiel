import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AccountStatus } from '../services/types';
import { useTranslation } from 'react-i18next';

interface StatusBadgeProps {
  status: AccountStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const { t } = useTranslation();
  const isActive = status === 'Ativa';
  return (
    <View className="flex-row items-center rounded-4xl bg-[#12172A] px-5 py-3">
      <Ionicons
        name={isActive ? 'checkmark-circle' : 'close-circle'}
        size={32}
        color={isActive ? '#34D399' : '#F87171'}
        accessibilityIgnoresInvertColors
      />
      <Text className={`ml-3 text-xl font-semibold font-inter ${isActive ? 'text-[#34D399]' : 'text-[#F87171]'}`}>
        {t(isActive ? 'result.active' : 'result.notFound')}
      </Text>
    </View>
  );
};

export default StatusBadge;
