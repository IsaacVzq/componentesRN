import 'react-native-gesture-handler';
import React from 'react';
import {BottomStack} from './src/Navigation/NavigatorStack';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

const App = () => (
  <AppState>
    <BottomStack />
  </AppState>
);
export default App;

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
