import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../firebase';
import { createHabit, getHabits, updateHabit, deleteHabit } from '../services/database';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function MyHabitsScreen({ navigation }) {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const userHabits = await getHabits(user.uid);
      setHabits(userHabits);
    } catch (error) {
      console.error('Error loading habits:', error);
      Alert.alert('Error', 'Failed to load habits');
    } finally {
      setLoading(false);
    }
  };

  // Refresh habits when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      loadHabits();
    }, [])
  );

  const toggleHabit = async (habitId) => {
    try {
      const habit = habits.find(h => h.id === habitId);
      if (!habit) return;

      await updateHabit(habitId, {
        isActive: !habit.isActive
      });
      loadHabits(); // Refresh the list
    } catch (error) {
      console.error('Error updating habit:', error);
      Alert.alert('Error', 'Failed to update habit');
    }
  };

  const handleDeleteHabit = async (habitId) => {
    try {
      await deleteHabit(habitId);
      loadHabits(); // Refresh the list
    } catch (error) {
      console.error('Error deleting habit:', error);
      Alert.alert('Error', 'Failed to delete habit');
    }
  };

  const renderHabit = ({ item }) => (
    <TouchableOpacity
      style={[styles.habitItem, !item.isActive && styles.inactiveHabit]}
      onPress={() => toggleHabit(item.id)}
    >
      <View style={styles.habitContent}>
        <Text style={styles.habitName}>{item.name}</Text>
        <Text style={styles.habitDetails}>
          {item.frequency} • Target: {item.target} times
        </Text>
        {item.description && (
          <Text style={styles.habitDescription}>{item.description}</Text>
        )}
      </View>
      <View style={styles.habitActions}>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => toggleHabit(item.id)}
          >
            <Ionicons 
              name={item.isActive ? "checkmark-circle" : "checkmark-circle-outline"} 
              size={24} 
              color={item.isActive ? "#2ecc71" : "#666"} 
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteHabit(item.id)}
          >
            <Ionicons name="trash-outline" size={24} color="#e74c3c" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Eco Habits</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddHabit')}
        >
          <Ionicons name="add-circle" size={24} color="#2ecc71" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text style={styles.loading}>Loading habits...</Text>
      ) : habits.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No habits yet. Add some eco-friendly habits to get started!</Text>
          <TouchableOpacity
            style={styles.emptyStateButton}
            onPress={() => navigation.navigate('AddHabit')}
          >
            <Text style={styles.emptyStateButtonText}>Add Your First Habit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={habits}
          renderItem={renderHabit}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  addButton: {
    padding: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  inactiveHabit: {
    opacity: 0.6,
  },
  habitContent: {
    flex: 1,
  },
  habitName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  habitDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  habitDescription: {
    fontSize: 14,
    color: '#666',
  },
  habitActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  checkButton: {
    padding: 5,
  },
  deleteButton: {
    padding: 5,
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginBottom: 20,
  },
  emptyStateButton: {
    backgroundColor: '#2ecc71',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  emptyStateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 