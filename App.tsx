import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoute} from './src/routes';
import {StoreProvider} from 'easy-peasy';
import {store} from './src/store';

export type IAppProps = {};

const App: React.FC<IAppProps> = ({}) => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <AppRoute />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
