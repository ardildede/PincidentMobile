import React, { useContext } from 'react';
import { SafeAreaView, View, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Card from '../components/Card';

const MOCK_COMPANIES = [
  { id: 1, name: 'Delta Akıllı Teknolojiler A.Ş.', subtitle: 'Teknopark İzmir A8 Binası' },
  { id: 2, name: 'Pincident Yazılım', subtitle: 'Bornova' },
  { id: 3, name: 'Veda Holding', subtitle: 'Bayraklı' },
];

const CompaniesScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === 'Admin';

  const handleEdit = (company) => {
    Alert.alert('Düzenle', `${company.name} adlı şirketi düzenle.`);
    // navigation.navigate('EditCompanyScreen', { companyId: company.id });
  };

  const handleDelete = (company) => {
    Alert.alert('Sil', `${company.name} adlı şirketi silmek istediğinizden emin misiniz?`);
    
  };

  const renderItem = ({ item }) => (
    <Card
      item={item}
      showAdminActions={isAdmin}
      onPress={() => Alert.alert('Detay', `${item.name} detay sayfasına gidilecek.`)}
      onEdit={() => handleEdit(item)}
      onDelete={() => handleDelete(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {}
      {isAdmin && (
        <View style={styles.header}>
            <Button 
                title="+ Yeni Şirket Ekle" 
                onPress={() => Alert.alert('Ekle', 'Yeni şirket ekleme ekranı açılacak.')} 
            />
        </View>
      )}
      <FlatList
        data={MOCK_COMPANIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 10,
    }
});

export default CompaniesScreen;
