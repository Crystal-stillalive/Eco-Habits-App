import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';

export default function HomeScreen({ navigation }) {
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome back, {user?.email?.split('@')[0] || 'Eco Warrior'}!
      </Text>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('My Habits')}
        >
          <Text style={styles.cardTitle}>My Habits</Text>
          <Text style={styles.cardDescription}>
            Track your daily eco-friendly habits and make a difference
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Progress')}
        >
          <Text style={styles.cardTitle}>Progress</Text>
          <Text style={styles.cardDescription}>
            View your environmental impact and track your achievements
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Today's Eco Tip</Text>
        <Text style={styles.tipText}>
          Did you know? Turning off the tap while brushing your teeth can save up to 8 gallons of water per day!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2ecc71',
  },
  cardContainer: {
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2ecc71',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  tipsContainer: {
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    padding: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2ecc71',
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
}); 