import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/Redux/store';
import {Provider} from 'react-redux';
import RootStack from './src/Stack/RootStack';
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
