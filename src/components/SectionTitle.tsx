import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';

export type ISectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<ISectionTitleProps> = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export {SectionTitle};

const styles = StyleSheet.create({
  title: {
    ...fonts.bold,
    fontSize: normalize(18),
    lineHeight: normalize(24),
    color: colors.primary,
  },
});
