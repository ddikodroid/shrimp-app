import React from 'react';
import {
  HargaUdangDetailScreen,
  InfoPenyakitScreen,
  KabarUdangDetailScreen,
} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTab} from './HomeTab';
import {colors} from '../styles/colors';

const {Navigator, Screen} = createNativeStackNavigator<any>();

const AppRoute: React.FC<any> = ({}) => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary},
        headerTitleStyle: {color: colors.white},
      }}>
      <Screen name="Jala Media" component={HomeTab} />
      <Screen name="Detail Harga Udang" component={HargaUdangDetailScreen} />
      <Screen name="Detail Kabar Udang" component={KabarUdangDetailScreen} />
      <Screen name="Info Penyakit" component={InfoPenyakitScreen} />
    </Navigator>
  );
};

export {AppRoute};
