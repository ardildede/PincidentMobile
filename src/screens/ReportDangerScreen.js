import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ReportDangerScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Tehlike/Ramak Kala Bildir</Text>
        <TextInput
            style={styles.input}
            placeholder="Lütfen olayı detaylı bir şekilde açıklayın..."
            multiline
            numberOfLines={10}
        />
        <Button title="Bildirimi Gönder" onPress={() => {
            Alert.alert("Başarılı", "Bildiriminiz başarıyla gönderildi.");
            navigation.goBack();
        }}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    input: {
        height: 200,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
        marginBottom: 20,
    }
});

export default ReportDangerScreen;