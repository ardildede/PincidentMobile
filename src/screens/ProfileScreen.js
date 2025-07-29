import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.avatar}>👤</Text>
        <Text style={styles.name}>{user?.name || 'Kullanıcı'}</Text>
        <Text style={styles.role}>{user?.role}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>E-posta:</Text>
        <Text style={styles.infoValue}>{user?.email || 'email@example.com'}</Text>
      </View>
      <Button title="Çıkış Yap" onPress={logout} color="#ff3b30" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    profileCard: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    avatar: {
        fontSize: 60,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    role: {
        fontSize: 16,
        color: 'gray',
        marginTop: 4,
    },
    infoSection: {
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 30,
    },
    infoLabel: {
        fontSize: 14,
        color: 'gray'
    },
    infoValue: {
        fontSize: 16,
        marginTop: 5,
    }
});

export default ProfileScreen;