import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
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

const Stack = createStackNavigator();

export const BottomStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
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
    </Stack.Navigator>
  );
};
