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
  children,
}) => {
  if (children) {
    return (
      <View style={[styles.baseContainer, styles.withChildren]}>
        <View style={styles.withChildrenText}>
          <Text style={styles.bottomSheetTitle}>{title}</Text>
          <Text style={styles.bottomSheetCloseTitle} onPress={onPressClose}>
            Tutup
          </Text>
        </View>
        {children}
      </View>
    );
  } else {
    return (
      <View style={[styles.baseContainer, styles.withoutChildren]}>
        <Text style={styles.bottomSheetTitle}>{title}</Text>
        <Text style={styles.bottomSheetCloseTitle} onPress={onPressClose}>
          Tutup
        </Text>
      </View>
    );
  }
};

export {BottomSheetHandle};

const styles = StyleSheet.create({
  baseContainer: {
    paddingHorizontal: normalize(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.dark.white,
  },
  withChildren: {
    // paddingBottom: normalize(8),
  },
  withChildrenText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: normalize(12),
    paddingBottom: normalize(8),
  },
  withoutChildren: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: normalize(10),
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
