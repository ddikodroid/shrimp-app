import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';

export type IBottomSheetHandleProps = {
  title: string;
  onPressClose: () => void;
};

const BottomSheetHandle: React.FC<IBottomSheetHandleProps> = ({
  title,
  onPressClose,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bottomSheetTitle}>{title}</Text>
      <Text style={styles.bottomSheetCloseTitle} onPress={onPressClose}>
        Tutup
      </Text>
    </View>
  );
};

export {BottomSheetHandle};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(12),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light.grey,
    borderTopRightRadius: normalize(16),
    borderTopLeftRadius: normalize(16),
  },
  bottomSheetTitle: {
    ...fonts.bold,
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: colors.dark.darkerGrey,
  },
  bottomSheetCloseTitle: {
    ...fonts.bold,
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: colors.primary,
  },
});
