import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleProp, View, ViewStyle } from 'react-native';

interface LottieWrapperProps {
  source: any;
  loop?: boolean;
  autoPlay?: boolean;
  style?: StyleProp<ViewStyle>;
}

const LottieWrapper: React.FC<LottieWrapperProps> = ({ source, loop = true, autoPlay = true, style }) => (
  <View accessible accessibilityRole="image" style={style}>
    <LottieView source={source} autoPlay={autoPlay} loop={loop} style={{ width: '100%', height: '100%' }} />
  </View>
);

export default LottieWrapper;
