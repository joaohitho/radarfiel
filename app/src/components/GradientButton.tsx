import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, PressableProps, Text } from 'react-native';
import { styled } from 'nativewind';

const Gradient = styled(LinearGradient);

interface GradientButtonProps extends PressableProps {
  title: string;
  colors?: [string, string];
}

const GradientButton: React.FC<GradientButtonProps> = ({ title, colors = ['#FF416C', '#FF4B2B'], ...props }) => (
  <Pressable accessibilityRole="button" {...props}>
    {({ pressed }) => (
      <Gradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className={`w-full rounded-4xl py-4 px-6 ${pressed ? 'opacity-90' : 'opacity-100'}`}
      >
        <Text className="text-white text-center text-lg font-semibold font-inter">{title}</Text>
      </Gradient>
    )}
  </Pressable>
);

export default GradientButton;
