import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import ScreenContainer from '../components/ScreenContainer';
import StatusBadge from '../components/StatusBadge';
import GradientButton from '../components/GradientButton';
import LottieWrapper from '../components/LottieWrapper';
import { RootStackParamList } from '../../App';
import { styled } from 'nativewind';

const Gradient = styled(LinearGradient);

const successAnimation = require('../assets/lottie/success.json');
const failureAnimation = require('../assets/lottie/failure.json');

const ResultScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Result'>> = ({
  route,
  navigation
}) => {
  const { status, username, app } = route.params;
  const { t } = useTranslation();
  const isActive = status === 'Ativa';

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Provide subtle auto feedback or analytics in future
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ScreenContainer className="pb-12 pt-16">
      <View className="items-center">
        <Gradient
          colors={isActive ? ['rgba(52,211,153,0.25)', 'rgba(11,15,26,0.8)'] : ['rgba(248,113,113,0.25)', 'rgba(11,15,26,0.8)']}
          className="mb-10 h-64 w-64 items-center justify-center rounded-full"
        >
          <LottieWrapper
            source={isActive ? successAnimation : failureAnimation}
            style={{ width: 220, height: 220 }}
            loop={false}
          />
        </Gradient>
        <Text className="text-lg text-[#9CA3AF] font-inter">{app}</Text>
        <Text className="mt-2 text-3xl font-semibold text-white font-inter">{username}</Text>
        <View className="mt-6">
          <StatusBadge status={status} />
        </View>
      </View>
      <View className="mt-auto space-y-4">
        <GradientButton
          title={t('result.tryAgain')}
          onPress={() => navigation.replace('CheckAccount')}
        />
      </View>
    </ScreenContainer>
  );
};

export default ResultScreen;
