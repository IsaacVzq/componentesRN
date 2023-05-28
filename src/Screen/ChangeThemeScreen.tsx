import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Cambiar Thema" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: colors.primary,
            borderRadius: 20,
            justifyContent: 'center',
            width: 150,
          }}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Ligth
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: colors.primary,
            borderRadius: 20,
            justifyContent: 'center',
            width: 150,
          }}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
