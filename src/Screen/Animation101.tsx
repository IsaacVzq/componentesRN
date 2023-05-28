import React, {useContext} from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import {useAnimation} from '../Hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {position, fadeIn, fadeOut, opacity, startMovingPosition} =
    useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,

          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="Fade In"
        color={colors.primary}
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button title="Fade Out" onPress={fadeOut} color={colors.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
