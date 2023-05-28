import React, {useContext} from 'react';

import {ThemeContext} from '../../context/themeContext/ThemeContext';

import {StyleSheet, Text, View} from 'react-native';
import {MenuItem} from '../../Types/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={23} />
        <Text style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </Text>
        <View style={{flex: 1}} />
        <Icon
          name="arrow-forward-circle-sharp"
          color={colors.primary}
          size={23}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  itemText: {marginHorizontal: 10, fontSize: 23},
});
