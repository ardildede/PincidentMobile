import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Icon = ({ name }) => <Text style={styles.icon}>{name === 'edit' ? '✏️' : '🗑️'}</Text>;
const Card = ({ item, onPress, showAdminActions, onEdit, onDelete }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
      </View>
      
      {/* Sadece Admin'e özel işlem butonları gösterilir */}
      {showAdminActions && (
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={onEdit}>
            <Icon name="edit" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Icon name="delete" />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 20,
    marginLeft: 15,
  },
});

export default Card;