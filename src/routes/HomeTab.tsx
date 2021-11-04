import React from 'react';
import {
  DaftarPenyakitScreen,
  HargaUdangScreen,
  KabarUdangScreen,
  SCREENS,
} from '../screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../styles/colors';
import {normalize} from './helpers/normalize';
export type IHomeTabProps = {};

const {Navigator, Screen} = createMaterialTopTabNavigator();

const HomeTab: React.FC<any> = ({}) => {
  return (
    <Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: normalize(4),
        },
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: normalize(14),
          fontWeight: '700',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark.grey,
      }}>
      <Screen name={SCREENS.HARGA_UDANG} component={HargaUdangScreen} />
      <Screen name={SCREENS.KABAR_UDANG} component={KabarUdangScreen} />
      <Screen name={SCREENS.DAFTAR_PENYAKIT} component={DaftarPenyakitScreen} />
    </Navigator>
  );
};

export {HomeTab};
