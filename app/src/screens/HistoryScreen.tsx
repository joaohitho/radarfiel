import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import ScreenContainer from '../components/ScreenContainer';
import HistoryList from '../components/HistoryList';
import { useHistoryStore } from '../stores/historyStore';
import { RootStackParamList } from '../../App';
import GradientButton from '../components/GradientButton';

const HistoryScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'History'>> = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const history = useHistoryStore((state) => state.history);
  const clearHistory = useHistoryStore((state) => state.clearHistory);

  return (
    <ScreenContainer className="pt-16">
      <View className="mb-6 flex-row items-center justify-between">
        <Text className="text-3xl font-semibold text-white font-inter">{t('history.title')}</Text>
        <Text
          className="text-sm text-[#9CA3AF] font-inter"
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
        >
          {t('common.back')}
        </Text>
      </View>
      <HistoryList data={history} locale={i18n.language} />
      {history.length > 0 && (
        <View className="mt-8">
          <GradientButton
            title={t('history.clear')}
            onPress={clearHistory}
            colors={['#1F2937', '#111827']}
          />
        </View>
      )}
    </ScreenContainer>
  );
};

export default HistoryScreen;
