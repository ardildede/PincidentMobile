import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FilterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>Filtrele</Text>
          <Button title="Kapat" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>No</Text>
        <TextInput style={styles.input} placeholder="Filtrelenecek No..." />
        
        <Text style={styles.label}>Adı</Text>
        <TextInput style={styles.input} placeholder="Filtrelenecek Ad..." />

        <Text style={styles.label}>Şehir</Text>
        <TextInput style={styles.input} placeholder="Şehir seçin..." />
        {/* Gerçek uygulamada burası Picker/Dropdown olacak */}

        <View style={styles.buttonContainer}>
            <Button title="Filtreleri Uygula" onPress={() => navigation.goBack()} />
            <View style={{marginTop: 10}}>
                <Button title="Temizle" color="gray" onPress={() => {}} />
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  title: { fontSize: 20, fontWeight: 'bold' },
  form: { padding: 20 },
  label: { fontSize: 16, marginTop: 15, marginBottom: 5 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, borderRadius: 5 },
  buttonContainer: { marginTop: 30 }
});

export default FilterScreen;