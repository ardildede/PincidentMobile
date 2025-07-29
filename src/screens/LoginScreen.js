import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (email && password) {
      login(email, password);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Pincident</Text>
        <TextInput
          style={styles.input}
          placeholder="E-Posta"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title="Giriş Yap" onPress={handleLogin} />
        </View>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>Şifremi unuttum</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ActivateAccount')}>
            <Text style={styles.linkText}>Hesabını aktive et</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dangerButtonContainer}>
        <TouchableOpacity 
            style={styles.dangerButton} 
            onPress={() => navigation.navigate('ReportDanger')}
        >
            <Text style={styles.dangerButtonText}>Tehlike/Ramak Kala Bildir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        padding: 20 
    },
    formContainer: {
        justifyContent: 'center',
    },
    title: { 
        fontSize: 32, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 40 
    },
    input: { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 20, 
        paddingHorizontal: 10, 
        borderRadius: 5 
    },
    buttonContainer: {
        marginBottom: 20,
    },
    linksContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    linkText: {
        color: '#007AFF',
        fontSize: 14,
        paddingVertical: 5,
    },
    dangerButtonContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
    },
    dangerButton: {
        backgroundColor: '#c53030',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    dangerButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default LoginScreen;