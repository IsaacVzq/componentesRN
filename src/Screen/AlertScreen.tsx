import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            console.log('Cancelar');
          },
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log('Ok PRESOONADO ');
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log('Dismiss');
        },
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};
