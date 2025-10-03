import React from 'react';
import { View, ViewProps } from 'react-native';

interface ScreenContainerProps extends ViewProps {
  className?: string;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style, className, ...props }) => (
  <View
    className={`flex-1 bg-background px-6 ${className ?? ''}`}
    style={style}
    {...props}
  >
    {children}
  </View>
);

export default ScreenContainer;
