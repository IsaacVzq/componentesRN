import React from 'react';
import {SectionList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {casas} from '../data/casasSectionList';
import {ItemSeparator} from '../components/ItemSeparator';

export const SectionListPage = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        ListFooterComponent={
          <View style={{marginBottom: 60}}>
            <HeaderTitle title={`Total de casas: ${casas.length}`} />
          </View>
        }
        stickySectionHeadersEnabled
        renderItem={({item}) => (
          <View style={stylesPage.item}>
            <Text style={stylesPage.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {casa}}) => (
          <Text style={stylesPage.header}>{casa}</Text>
        )}
        renderSectionFooter={({section}) => (
          <Text
            style={stylesPage.header}>{`Total: ${section.data.length}`}</Text>
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const stylesPage = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 5,
    marginVertical: 2,
  },
  header: {
    fontSize: 30,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
  },
});
