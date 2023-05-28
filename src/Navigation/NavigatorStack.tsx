import React, {useContext} from 'react';
import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from '../context/themeContext/ThemeContext';

import {HomeScreen} from '../Screen/HomeScreen';
import {Animation101Screen} from '../Screen/Animation101';
import {Animation102Screen} from '../Screen/Animation102';
import {SwitchScreen} from '../Screen/SwitchScreen';
import {AlertScreen} from '../Screen/AlertScreen';
import {TextInputScreen} from '../Screen/TextInputScreen';
import {PullToRefreshScreen} from '../Screen/PullToRefreshScreen';
import {SectionListPage} from '../Screen/SectionListPage';
import {ModalScreen} from '../Screen/ModalScreen';
import {InfiniteScrollScreen} from '../Screen/InfiniteScrollScreen';
import {SlidesScreen} from '../Screen/SlidesScreen';
import {ChangeThemeScreen} from '../Screen/ChangeThemeScreen';

const Stack = createStackNavigator();

export const BottomStack = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // cardStyle: {backgroundColor: 'white'},
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Animation101Screen"
            component={Animation101Screen}
          />
          <Stack.Screen
            name="Animation102Screen"
            component={Animation102Screen}
          />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen
            name="PullToRefreshScreen"
            component={PullToRefreshScreen}
          />
          <Stack.Screen name="SectionListPage" component={SectionListPage} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
