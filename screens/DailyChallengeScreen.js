import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DailyChallengeScreen({ navigation }) {
  const [challengeAccepted, setChallengeAccepted] = useState(false);

  // Sample daily challenge data
  const dailyChallenge = {
    title: "Water Conservation Challenge",
    description: "Take a 5-minute shower instead of a bath today and save up to 20 gallons of water!",
    impact: "This simple change can save approximately 20 gallons of water per day, which adds up to 7,300 gallons per year!",
    tips: [
      "Set a timer to keep track of your shower time",
      "Turn off the water while soaping up",
      "Consider installing a low-flow showerhead",
      "Collect the cold water while waiting for it to warm up and use it for plants"
    ],
    icon: "💧"
  };

  const handleAcceptChallenge = () => {
    setChallengeAccepted(true);
    // Here you would typically save the challenge acceptance to your database
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Daily Challenge</Text>
      </View>

      <View style={styles.challengeCard}>
        <View style={styles.challengeIcon}>
          <Text style={styles.iconText}>{dailyChallenge.icon}</Text>
        </View>
        
        <Text style={styles.challengeTitle}>{dailyChallenge.title}</Text>
        <Text style={styles.challengeDescription}>{dailyChallenge.description}</Text>
        
        <View style={styles.impactSection}>
          <Text style={styles.sectionTitle}>Environmental Impact</Text>
          <Text style={styles.impactText}>{dailyChallenge.impact}</Text>
        </View>

        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Tips to Complete</Text>
          {dailyChallenge.tips.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>

        {!challengeAccepted ? (
          <TouchableOpacity 
            style={styles.acceptButton}
            onPress={handleAcceptChallenge}
          >
            <Text style={styles.acceptButtonText}>Mark as Complete</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.acceptedContainer}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <Text style={styles.acceptedText}>Challenge Completed!</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF9C4',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginLeft: 15,
  },
  challengeCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
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
  challengeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF9C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 30,
  },
  challengeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  challengeDescription: {
    fontSize: 16,
    color: '#2D3047',
    lineHeight: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  impactSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFDE7',
    borderRadius: 12,
  },
  impactText: {
    fontSize: 14,
    color: '#2D3047',
    lineHeight: 20,
  },
  tipsSection: {
    marginBottom: 20,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#2D3047',
    marginLeft: 10,
    flex: 1,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  acceptedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#FFFDE7',
    borderRadius: 12,
    marginTop: 10,
  },
  acceptedText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
}); 