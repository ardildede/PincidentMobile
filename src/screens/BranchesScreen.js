import React, { useContext } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Card from '../components/Card';

const MOCK_BRANCHES = [
  { id: 1, name: 'İzmir Urla Şube', subtitle: 'TEST GDZ ADM ELEKTRİK DAĞITIM' },
  { id: 2, name: 'İzmir Urla Şube (Eski)', subtitle: 'TEST GDZ ADM ELEKTRİK DAĞITIM' },
  { id: 3, name: 'Alen Group Güney', subtitle: 'ALEN GROUP ENERJİ İNŞAAT' },
];

const BranchesScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === 'Admin';

  const renderItem = ({ item }) => (
    <Card
      item={item}
      showAdminActions={isAdmin}
      onPress={() => Alert.alert('Detay', `${item.name} şube detayları.`)}
      onEdit={() => Alert.alert('Düzenle', `${item.name} şubesini düzenle.`)}
      onDelete={() => Alert.alert('Sil', `${item.name} şubesini sil.`)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MOCK_BRANCHES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
});

export default BranchesScreen;