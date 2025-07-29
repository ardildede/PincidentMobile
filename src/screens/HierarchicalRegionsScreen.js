import React from 'react';
import { SafeAreaView, SectionList, Text, View, StyleSheet } from 'react-native';

const MOCK_DATA = {
    izmir: [
        { title: 'İzmir Güney', data: [{id: 211, name: 'Urla'}] },
        { title: 'İzmir Metropol', data: [{id: 214, name: 'Bornova'}, {id: 215, name: 'Bayraklı'}] },
    ],
    konya: [
        { title: 'Konya Merkez', data: [{id: 301, name: 'Selçuklu'}, {id: 302, name: 'Meram'}] },
    ]
};

const HierarchicalRegionsScreen = ({ route }) => {
  const { cityName } = route.params;
  // Normalde cityId ile API'den veri çekilir.
  const cityData = cityName?.toLowerCase() === 'izmir' ? MOCK_DATA.izmir : MOCK_DATA.konya;

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={cityData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ListHeaderComponent={<Text style={styles.mainTitle}>{cityName} Bölge ve İlçeleri</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  mainTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 16, },
  header: { fontSize: 18, fontWeight: 'bold', backgroundColor: '#e0e0e0', padding: 10, },
  item: { padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee', },
  itemText: { fontSize: 16 }
});

export default HierarchicalRegionsScreen;