import {ImageSourcePropType} from 'react-native';

export interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

export interface Casas {
  casa: string;
  data: string[];
}

export interface SlideType {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
