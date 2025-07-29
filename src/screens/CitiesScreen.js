import React, { useContext } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Card from '../components/Card';

const MOCK_CITIES = [
  { id: 4, name: 'İzmir' },
  { id: 124, name: 'Konya' },
  { id: 159, name: 'Karaman' },
  { id: 167, name: 'Kırşehir' },
];

const CitiesScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === 'Admin';

  const renderItem = ({ item }) => (
    <Card
      item={item}
      showAdminActions={isAdmin}
      // Detay ekranına yönlendirme
      onPress={() => navigation.navigate('HierarchicalRegions', { cityId: item.id, cityName: item.name })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MOCK_CITIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
});

export default CitiesScreen;