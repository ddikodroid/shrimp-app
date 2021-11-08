import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';
import {Gap} from './Gap';

export type IHargaUdangListItemProps = {
  price: number | null | string;
  size: string | number;
};

const HargaUdangListItem: React.FC<IHargaUdangListItemProps> = ({
  price,
  size,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sizeText}>Size {size}</Text>
      <Gap width={8} />
      <Text style={styles.priceText}>Rp {price}</Text>
    </View>
  );
};

export {HargaUdangListItem};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(6),
  },
  sizeText: {
    ...fonts.regular,
    fontSize: normalize(16),
    lineHeight: normalize(20),
    color: colors.dark.darkerGrey,
  },
  priceText: {
    ...fonts.regular,
    fontSize: normalize(16),
    lineHeight: normalize(20),
    color: colors.dark.darkerGrey,
  },
});
