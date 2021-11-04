import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoute} from './src/routes';

export type IAppProps = {};

const App: React.FC<IAppProps> = ({}) => {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
};

export default App;
