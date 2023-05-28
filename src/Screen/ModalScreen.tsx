import React, {useState} from 'react';
import {Button, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button
        title="Abrir Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View style={stylesScreen.modalView}>
          <View style={stylesScreen.contetnModal}>
            <Text style={stylesScreen.titleModal}>Modal</Text>
            <Pressable
              style={[stylesScreen.button, stylesScreen.buttonClose]}
              onPress={() => setIsVisible(!isVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contetnModal: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  titleModal: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
});
