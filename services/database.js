import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';

// Data Models
export const HabitModel = {
    userId: '',
    name: '',
    description: '',
    category: '',
    frequency: 'daily', // daily, weekly, monthly
    target: 1, // number of times per frequency
    createdAt: new Date(),
    isActive: true
};

export const ProgressModel = {
    userId: '',
    habitId: '',
    date: new Date(),
    completed: false,
    notes: '',
    value: 0 // optional: for tracking numerical progress
};

// CRUD Operations for Habits
export const createHabit = async (userId, habitData) => {
    try {
        const habitWithUser = {
            ...HabitModel,
            ...habitData,
            userId,
            createdAt: new Date()
        };
        const docRef = await addDoc(collection(db, 'habits'), habitWithUser);
        return { id: docRef.id, ...habitWithUser };
    } catch (error) {
        console.error('Error creating habit:', error);
        throw error;
    }
};

export const getHabits = async (userId) => {
    try {
        const q = query(collection(db, 'habits'), where('userId', '==', userId));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error getting habits:', error);
        throw error;
    }
};

export const updateHabit = async (habitId, habitData) => {
    try {
        const habitRef = doc(db, 'habits', habitId);
        await updateDoc(habitRef, habitData);
        return { id: habitId, ...habitData };
    } catch (error) {
        console.error('Error updating habit:', error);
        throw error;
    }
};

export const deleteHabit = async (habitId) => {
    try {
        await deleteDoc(doc(db, 'habits', habitId));
        return true;
    } catch (error) {
        console.error('Error deleting habit:', error);
        throw error;
    }
};

// CRUD Operations for Progress
export const createProgress = async (userId, habitId, progressData) => {
    try {
        const progressWithUser = {
            ...ProgressModel,
            ...progressData,
            userId,
            habitId,
            date: new Date()
        };
        const docRef = await addDoc(collection(db, 'progress'), progressWithUser);
        return { id: docRef.id, ...progressWithUser };
    } catch (error) {
        console.error('Error creating progress:', error);
        throw error;
    }
};

export const getProgress = async (userId, habitId) => {
    try {
        const q = query(
            collection(db, 'progress'),
            where('userId', '==', userId),
            where('habitId', '==', habitId)
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error getting progress:', error);
        throw error;
    }
};

export const updateProgress = async (progressId, progressData) => {
    try {
        const progressRef = doc(db, 'progress', progressId);
        await updateDoc(progressRef, progressData);
        return { id: progressId, ...progressData };
    } catch (error) {
        console.error('Error updating progress:', error);
        throw error;
    }
};

export const deleteProgress = async (progressId) => {
    try {
        await deleteDoc(doc(db, 'progress', progressId));
        return true;
    } catch (error) {
        console.error('Error deleting progress:', error);
        throw error;
    }
}; 