import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';
interface Props {
  title: string;
}
export const HeaderTitle = ({title}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginBottom: 25, top}}>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};
