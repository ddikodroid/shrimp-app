import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';

export type IVerificationBadgeProps = {
  isVerified: boolean;
};

const VerificationBadge: React.FC<IVerificationBadgeProps> = ({isVerified}) => {
  if (isVerified) {
    return (
      <View style={[styles.baseContainer, styles.verified]}>
        <Icon
          type="MaterialCommunityIcons"
          name="star-circle"
          color={colors.yellow}
          size={normalize(16)}
        />
        <Text style={styles.text}>Terverikasi</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.baseContainer, styles.notVerified]}>
        <Text style={styles.text}>Belum Terverikasi</Text>
      </View>
    );
  }
};

export {VerificationBadge};

const styles = StyleSheet.create({
  baseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(3),
    borderRadius: normalize(12),
  },
  verified: {
    backgroundColor: colors.light.yellow,
    paddingHorizontal: normalize(4),
  },
  notVerified: {
    backgroundColor: colors.dark.white,
    paddingHorizontal: normalize(8),
  },
  text: {
    ...fonts.regular,
    fontSize: normalize(12),
    lineHeight: normalize(16),
    color: colors.dark.grey,
  },
});
