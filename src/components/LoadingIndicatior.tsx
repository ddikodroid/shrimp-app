import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {colors} from '../styles';

export type ILoadingIndicatiorProps = {};

const container: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const LoadingIndicatior: React.FC<ILoadingIndicatiorProps> = ({}) => {
  return (
    <View style={container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export {LoadingIndicatior};
