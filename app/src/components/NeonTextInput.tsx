import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const NeonTextInput: React.FC<TextInputProps> = ({ style, ...props }) => (
  <TextInput
    placeholderTextColor="#6B7280"
    style={style}
    className="w-full rounded-4xl border border-[#1F2A44] bg-[#12172A] px-6 py-4 text-base text-white font-inter"
    {...props}
  />
);

export default NeonTextInput;
