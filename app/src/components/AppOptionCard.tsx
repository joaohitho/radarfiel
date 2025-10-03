import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text } from 'react-native';
import { AppOption } from '../factories/accountCheckerFactory';
import { useTranslation } from 'react-i18next';
import { styled } from 'nativewind';

const Gradient = styled(LinearGradient);

interface AppOptionCardProps {
  option: AppOption;
  selected: boolean;
  onSelect: (option: AppOption) => void;
}

const AppOptionCard: React.FC<AppOptionCardProps> = ({ option, selected, onSelect }) => {
  const { t } = useTranslation();
  return (
    <Pressable
      onPress={() => onSelect(option)}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      className="w-full"
    >
      {({ pressed }) => (
        <Gradient
          colors={option.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className={`mb-3 w-full rounded-4xl p-1 ${pressed ? 'opacity-95' : ''}`}
        >
          <Gradient
            colors={selected ? ['rgba(11,15,26,0.7)', 'rgba(11,15,26,0.9)'] : ['rgba(11,15,26,0.95)', 'rgba(11,15,26,0.95)']}
            className="rounded-4xl px-6 py-5"
          >
            <Text className={`text-lg font-semibold font-inter ${selected ? 'text-white' : 'text-[#D1D5DB]'}`}>
              {t(option.translationKey)}
            </Text>
          </Gradient>
        </Gradient>
      )}
    </Pressable>
  );
};

export default AppOptionCard;
