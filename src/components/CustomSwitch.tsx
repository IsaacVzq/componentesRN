import React, {useContext, useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {Switch, View} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}
export const CustomSwitch = ({isOn, onChange}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <View>
      <Switch
        trackColor={{false: '#D9D9DB', true: colors.text}}
        thumbColor={isEnabled ? 'green' : colors.primary}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
