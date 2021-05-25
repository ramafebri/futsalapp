import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
import RootStore from './app/models/root';
import MainNavigation from './app/navigation/main-navigation';

const App = () => {
  return (
    <Provider store={RootStore}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
