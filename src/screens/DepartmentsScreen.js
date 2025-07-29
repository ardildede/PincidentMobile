import React, { useContext } from 'react';
import { SafeAreaView, View, FlatList, Button, StyleSheet, Alert, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Card from '../components/Card';

const MOCK_DEPARTMENTS = [
  { id: 1, name: 'Genel Müdürlük', subtitle: 'Delta Akıllı Teknolojiler' },
  { id: 2, name: 'Yazılım Geliştirme', subtitle: 'Delta Akıllı Teknolojiler' },
  { id: 3, name: 'Satış ve Pazarlama', subtitle: 'Veda Holding' },
];

const DepartmentsScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === 'Admin';

  const renderItem = ({ item }) => (
    <Card
      item={item}
      showAdminActions={isAdmin}
      onPress={() => Alert.alert('Detay', `${item.name} departmanının detayları.`)}
      onEdit={() => Alert.alert('Düzenle', `${item.name} departmanını düzenle.`)}
      onDelete={() => Alert.alert('Sil', `${item.name} departmanını sil.`)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {isAdmin && (
        <View style={styles.header}>
            <Button 
                title="+ Yeni Departman Ekle" 
                onPress={() => Alert.alert('Ekle', 'Yeni departman ekleme ekranı açılacak.')} 
            />
        </View>
      )}
      {user?.role === 'Manager' && (
        <View style={styles.infoBox}>
            <Text>Yönetici olduğunuz için departmanları görüntüleyebilirsiniz.</Text>
        </View>
      )}
      <FlatList
        data={MOCK_DEPARTMENTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    header: { paddingHorizontal: 16, paddingTop: 10, },
    infoBox: { padding: 15, marginHorizontal: 16, backgroundColor: '#eef2f7', borderRadius: 5, marginTop: 10 }
});

export default DepartmentsScreen;