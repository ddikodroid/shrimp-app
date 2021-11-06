import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  PressableProps,
} from 'react-native';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';

interface IButtonProps extends PressableProps {
  title: string;
  loading?: boolean;
  buttonStyle?: ViewStyle;
}

const Button: React.FC<IButtonProps> = ({
  onPress,
  title,
  loading,
  buttonStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.base, buttonStyle]}
      disabled={loading}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export {Button};

const styles = StyleSheet.create({
  base: {
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(8),
    borderRadius: normalize(8),
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    ...fonts.bold,
    fontSize: normalize(14),
    color: colors.white,
  },
});
