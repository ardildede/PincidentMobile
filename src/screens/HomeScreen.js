import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hoş Geldin, {user?.name}!</Text>
      <Text style={styles.roleText}>Rolünüz: {user?.role}</Text>
      
      {/* Admin rolüne özel içerik */}
      {user?.role === 'Admin' && (
        <View style={styles.infoBox}>
          <Text>Admin olarak tüm şirket ve kullanıcı verilerini yönetebilirsiniz.</Text>
        </View>
      )}

      {/* Manager rolüne özel içerik */}
      {user?.role === 'Manager' && (
        <View style={styles.infoBox}>
          <Text>Yönetici olarak kendi departmanınızdaki kullanıcıları yönetebilirsiniz.</Text>
        </View>
      )}

      <Button title="Çıkış Yap" onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    roleText: { fontSize: 18, color: 'gray', marginBottom: 30 },
    infoBox: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 5, marginBottom: 30, width: '100%', alignItems: 'center' }
});

export default HomeScreen;