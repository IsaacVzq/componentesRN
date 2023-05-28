import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'setLightTheme'} | {type: 'setDarkTheme'};

export interface ThemState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const LightTheme: ThemState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#5856D6',
    background: 'white',
    card: 'black',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
  dividerColor: 'rgba(0,0,0,0.7)',
};
//
export const DarkTheme: ThemState = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    primary: 'red',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'teal',
  },
  dividerColor: 'rgba(255,0,0,0.7)',
};
export const themeReducer = (
  state: ThemState,
  action: ThemeAction,
): ThemState => {
  switch (action.type) {
    case 'setLightTheme':
      return {...LightTheme};
    case 'setDarkTheme':
      return {...DarkTheme};
    default:
      return state;
  }
};
