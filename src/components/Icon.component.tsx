import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

type IconProps = {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  size: number;
  onPress: () => void;
};

const Icon = ({
  name,
  color = '#fff',
  size = 24,
  onPress = () => {},
}: IconProps): JSX.Element => {
  const Touchable: React.ElementType =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <Touchable onPress={onPress}>
      <MaterialCommunityIcons name={name} color={color} size={size} />
    </Touchable>
  );
};

export default Icon;
