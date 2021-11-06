import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';
import {window} from '../styles/constants';

export type IFilterFloatingButtonProps = {
  onPressSize: () => void | void;
  onPressRegion: () => void | void;
  size?: string | number;
  region?: string;
};

const FilterFloatingButton: React.FC<IFilterFloatingButtonProps> = ({
  onPressRegion,
  onPressSize,
  size = 'Ukuran',
  region = 'Tentukan daerah',
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressSize}
        style={[styles.row, styles.sizeContainer]}>
        <Icon
          type="MaterialCommunityIcons"
          name="scale"
          size={normalize(18)}
          color={colors.white}
        />
        <View style={styles.sizeSubContainer}>
          <Text style={styles.sizeTitle}>Size</Text>
          <Text style={styles.sizeValue} numberOfLines={1}>
            {size}
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={onPressRegion}
        style={[styles.row, styles.regionContainer]}>
        <Icon
          type="Ionicons"
          name="location-sharp"
          color={colors.white}
          size={normalize(18)}
        />
        <Text style={styles.region} numberOfLines={2}>
          {region}
        </Text>
      </Pressable>
    </View>
  );
};

export {FilterFloatingButton};

const styles = StyleSheet.create({
  container: {
    // zIndex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: normalize(8),
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  sizeContainer: {
    backgroundColor: colors.dark.blue,
    borderTopLeftRadius: normalize(24),
    borderBottomLeftRadius: normalize(24),
    width: window.width * 0.3,
    paddingHorizontal: normalize(25),
  },
  sizeSubContainer: {
    marginLeft: normalize(8),
  },
  sizeTitle: {
    ...fonts.regular,
    fontSize: normalize(12),
    lineHeight: normalize(16),
  },
  sizeValue: {
    ...fonts.bold,
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  regionContainer: {
    backgroundColor: colors.primary,
    borderTopRightRadius: normalize(24),
    borderBottomRightRadius: normalize(24),
    width: window.width * 0.6,
    paddingHorizontal: normalize(25),
  },
  region: {
    ...fonts.bold,
    fontSize: normalize(16),
    lineHeight: normalize(24),
    marginLeft: normalize(8),
    width: '75%',
  },
});
