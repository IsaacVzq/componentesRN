import React from 'react';
import {useAnimation} from '../Hooks/useAnimation';
import {
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useState} from 'react';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setisLoading] = useState(true);
  const finishLoading = () => {
    setisLoading(false);
    fadeIn();
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="#5856d6"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
