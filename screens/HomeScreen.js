import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { auth } from '../firebase';

export default function HomeScreen({ navigation }) {
  const user = auth.currentUser;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome back, {user?.email?.split('@')[0] || 'Eco Warrior'}! 🌱
        </Text>
      </View>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('My Habits')}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>My Eco Habits</Text>
            <Text style={styles.cardDescription}>
              Track your daily eco-friendly habits and make a difference
            </Text>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>♻️</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.dailyChallenge}>
        <Text style={styles.sectionTitle}>Today's Challenge 🎯</Text>
        <TouchableOpacity 
          style={styles.challengeCard}
          onPress={() => navigation.navigate('DailyChallenge')}
        >
          <Text style={styles.challengeTitle}>Water Conservation</Text>
          <Text style={styles.challengeDescription}>
            Take a 5-minute shower instead of a bath today and save up to 20 gallons of water!
          </Text>
          <TouchableOpacity 
            style={styles.challengeButton}
            onPress={() => navigation.navigate('DailyChallenge')}
          >
            <Text style={styles.challengeButtonText}>View Challenge</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.ecoFacts}>
        <Text style={styles.sectionTitle}>Did You Know? 💡</Text>
        <View style={styles.factsCard}>
          <Text style={styles.factText}>
            Recycling one aluminum can saves enough energy to run a TV for 3 hours!
          </Text>
          <View style={styles.factsDecoration}>
            <Text style={styles.factsDecorationText}>♻️</Text>
          </View>
        </View>
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Eco Tip of the Day</Text>
        <Text style={styles.tipText}>
          Did you know? Turning off the tap while brushing your teeth can save up to 8 gallons of water per day!
        </Text>
        <View style={styles.tipDecoration}>
          <Text style={styles.tipDecorationText}>💧</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    flex: 1,
  },
  cardContainer: {
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cardContent: {
    position: 'relative',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  cardDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 22,
    marginBottom: 15,
  },
  cardIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#FFF9C4',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIconText: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
  },
  dailyChallenge: {
    marginBottom: 30,
  },
  challengeCard: {
    backgroundColor: '#FFF9C4',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  challengeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  challengeDescription: {
    fontSize: 16,
    color: '#2D3047',
    lineHeight: 22,
    marginBottom: 15,
  },
  challengeButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  challengeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ecoFacts: {
    marginBottom: 30,
  },
  factsCard: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
  },
  factText: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 22,
  },
  factsDecoration: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: '#FFF9C4',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  factsDecorationText: {
    fontSize: 20,
  },
  tipsContainer: {
    backgroundColor: '#FFF9C4',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
    marginBottom: 30,
  },
  tipsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4CAF50',
  },
  tipText: {
    fontSize: 16,
    color: '#2D3047',
    lineHeight: 22,
  },
  tipDecoration: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: '#4CAF50',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipDecorationText: {
    fontSize: 20,
  },
});
