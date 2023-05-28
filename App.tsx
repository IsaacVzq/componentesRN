import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomStack} from './src/Navigation/NavigatorStack';

const App = () => (
  <NavigationContainer>
    <BottomStack />
  </NavigationContainer>
);
export default App;
