import React from 'react';
import {View} from 'react-native';
import {normalize} from '../helpers/normalize';

export type IGapProps = {
  width?: number;
  height?: number;
};

const Gap: React.FC<IGapProps> = ({width = 0, height = 0}) => {
  return <View style={{width: normalize(width), height: normalize(height)}} />;
};

export {Gap};
