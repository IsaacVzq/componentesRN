import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
interface Props {
  title: string;
}
export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginBottom: 25, top}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
