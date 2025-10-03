import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../components/GradientButton';
import ScreenContainer from '../components/ScreenContainer';
import LottieWrapper from '../components/LottieWrapper';
import { RootStackParamList } from '../../App';

const onboardingAnimation = require('../assets/lottie/onboarding.json');

const OnboardingScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Onboarding'>> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <ScreenContainer className="justify-between pb-12 pt-20">
      <View className="items-center">
        <LinearGradient
          colors={['rgba(255,65,108,0.3)', 'rgba(255,75,43,0.1)']}
          className="mb-12 h-64 w-64 items-center justify-center rounded-full"
        >
          <LottieWrapper source={onboardingAnimation} style={{ width: 220, height: 220 }} />
        </LinearGradient>
        <Text className="text-4xl font-semibold text-white font-inter">{t('onboarding.title')}</Text>
        <Text className="mt-6 text-center text-base text-[#9CA3AF] font-inter">
          {t('onboarding.subtitle')}
        </Text>
      </View>
      <GradientButton
        title={t('onboarding.cta')}
        onPress={() => navigation.navigate('CheckAccount')}
        accessibilityLabel={t('onboarding.cta')}
      />
    </ScreenContainer>
  );
};

export default OnboardingScreen;
