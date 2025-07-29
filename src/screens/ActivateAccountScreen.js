import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

const ActivateAccountScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleActivation = () => {
    if (!email) {
      Alert.alert('Hata', 'Lütfen e-posta adresinizi girin.');
      return;
    }
    
    Alert.alert(
      'İstek Gönderildi',
      `${email} adresine aktivasyon bilgileri gönderildi.`
    );
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hesabı Aktive Et</Text>
      <Text style={styles.subtitle}>
        Kayıtlı e-posta adresinize aktivasyon kodu göndermek için aşağıdaki alanı doldurun.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-Posta Adresiniz"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Aktivasyon Kodu Gönder" onPress={handleActivation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    subtitle: { fontSize: 14, textAlign: 'center', color: 'gray', marginBottom: 30 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, borderRadius: 5 },
});

export default ActivateAccountScreen;