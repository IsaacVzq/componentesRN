import React from 'react';
import {ScrollView, View, RefreshControl, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {useState} from 'react';

export const PullToRefreshScreen = () => {
  const [refreshing, setrefreshing] = useState<boolean>(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      console.log('terMinamosn');
      setrefreshing(false);
      setData('Hoola Mundo');
    }, 2500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          colors={['yellow', 'red', 'black']}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};
