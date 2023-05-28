import {createContext, useEffect, useReducer} from 'react';
import {DarkTheme, LightTheme, ThemState, themeReducer} from './ThemeReducer';
import {AppState, Appearance, useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? DarkTheme : LightTheme,
  );

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light' ? setLightTheme : setDarkTheme;
      }
    });
  }, []);

  useEffect(() => {
    colorScheme === 'light' ? setLightTheme : setDarkTheme;
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'setDarkTheme'});
    console.log('setDark');
  };
  const setLightTheme = () => {
    dispatch({type: 'setLightTheme'});
    console.log('setLigth');
  };
  return (
    <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
