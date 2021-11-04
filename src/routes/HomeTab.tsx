import React from 'react';
import {
  DaftarPenyakitScreen,
  HargaUdangScreen,
  KabarUdangScreen,
  SCREENS,
} from '../screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
export type IHomeTabProps = {};

const {Navigator, Screen} = createMaterialTopTabNavigator();

const HomeTab: React.FC<any> = ({}) => {
  return (
    <Navigator>
      <Screen name={SCREENS.HARGA_UDANG} component={HargaUdangScreen} />
      <Screen name={SCREENS.KABAR_UDANG} component={KabarUdangScreen} />
      <Screen name={SCREENS.DAFTAR_PENYAKIT} component={DaftarPenyakitScreen} />
    </Navigator>
  );
};

export {HomeTab};
