import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import GradientButton from '../components/GradientButton';
import ScreenContainer from '../components/ScreenContainer';
import NeonTextInput from '../components/NeonTextInput';
import AppOptionCard from '../components/AppOptionCard';
import { APP_OPTIONS } from '../factories/accountCheckerFactory';
import { RootStackParamList } from '../../App';
import { useCheckAccount } from '../hooks/useCheckAccount';
import LottieWrapper from '../components/LottieWrapper';

const loadingAnimation = require('../assets/lottie/loading.json');

const CheckAccountScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'CheckAccount'>> = ({
  navigation
}) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [selectedApp, setSelectedApp] = useState(APP_OPTIONS[0]);
  const { checkAccount, isLoading } = useCheckAccount();

  const handleSubmit = async () => {
    const trimmed = username.trim();
    if (!trimmed) {
      Alert.alert(t('check.errorTitle'), t('check.emptyError'), [{ text: t('common.ok') }]);
      return;
    }

    try {
      const normalized = trimmed;
      const status = await checkAccount(selectedApp.id, normalized);
      navigation.navigate('Result', {
        status,
        username: normalized,
        app: t(selectedApp.translationKey)
      });
    } catch {
      Alert.alert(t('check.errorTitle'), t('check.genericError'), [{ text: t('common.ok') }]);
    }
  };

  return (
    <ScreenContainer className="pb-8 pt-16">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 96 }}
        >
          <View className="mb-8 flex-row items-center justify-between">
            <Text className="text-3xl font-semibold text-white font-inter">{t('check.title')}</Text>
            <Text
              className="text-sm text-[#9CA3AF] font-inter"
              onPress={() => navigation.navigate('History')}
              accessibilityRole="button"
            >
              {t('check.history')}
            </Text>
          </View>
          <NeonTextInput
            value={username}
            onChangeText={setUsername}
            placeholder={t('check.placeholder')}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            accessibilityLabel={t('check.placeholder')}
          />
          <Text className="mt-8 text-base text-[#9CA3AF] font-inter">{t('check.selectLabel')}</Text>
          <View className="mt-4">
            {APP_OPTIONS.map((option) => (
              <AppOptionCard
                key={option.id}
                option={option}
                selected={selectedApp.id === option.id}
                onSelect={setSelectedApp}
              />
            ))}
          </View>
        </ScrollView>
        <View className="absolute bottom-6 left-6 right-6">
          {isLoading ? (
            <View className="h-16 items-center justify-center rounded-4xl border border-[#1F2A44] bg-[#12172A]">
              <LottieWrapper source={loadingAnimation} style={{ width: 120, height: 120 }} />
              <Text className="absolute text-sm text-[#D1D5DB] font-inter">{t('check.loading')}</Text>
            </View>
          ) : (
            <GradientButton title={t('check.button')} onPress={handleSubmit} />
          )}
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default CheckAccountScreen;
