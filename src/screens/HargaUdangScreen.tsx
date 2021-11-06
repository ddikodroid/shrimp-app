import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FilterFloatingButton} from '../components/FilterFloatingButton';
import {colors} from '../styles';

export type IHargaUdangScreenProps = {};

const HargaUdangScreen: React.FC<IHargaUdangScreenProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FilterFloatingButton
        onPressRegion={() => console.log('Region')}
        onPressSize={() => console.log('Size')}
      />
    </SafeAreaView>
  );
};

export {HargaUdangScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
