import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../Hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';

export const TextInputScreen = () => {
  const {form, onChange, isSubribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubribed: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInput" />
            <TextInput
              style={stylesScreen.textInputStyle}
              placeholder="Ingrese su Nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => {
                onChange(value, 'name');
              }}
            />
            <TextInput
              style={stylesScreen.textInputStyle}
              placeholder="Ingrese su Email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => {
                onChange(value, 'email');
              }}
              keyboardType="email-address"
            />
            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Subsribirse</Text>
              <CustomSwitch
                isOn={isSubribed}
                onChange={value => {
                  onChange(value, 'isSubribed');
                }}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={stylesScreen.textInputStyle}
              placeholder="Ingrese su Phone"
              onChangeText={value => {
                onChange(value, 'phone');
              }}
              keyboardType="phone-pad"
            />
            <View style={{marginBottom: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  switchText: {
    fontSize: 20,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
