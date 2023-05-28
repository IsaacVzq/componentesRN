import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {imagenesItems} from '../data/imagenesSlider';
import {SlideType} from '../Types/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../Hooks/useAnimation';
import {Animated} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}
const {width: screenWidth} = Dimensions.get('window');
export const SlidesScreen = ({navigation}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [indexSlide, setIndexSlide] = useState<number>(0);
  const isVisible = useRef(false);

  const renderItem = (item: SlideType) => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
      }}>
      <Image
        source={item.img}
        style={{width: 350, height: 400, resizeMode: 'center'}}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.desc}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={imagenesItems}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setIndexSlide(index);
          if (indexSlide === imagenesItems.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={imagenesItems.length}
          activeDotIndex={indexSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#5856D6',
          }}
        />

        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: '#5856D6',
              width: 140,
              height: 50,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            activeOpacity={0.9}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('Home');
              }
            }}>
            <Text style={{fontSize: 19, color: 'white'}}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
