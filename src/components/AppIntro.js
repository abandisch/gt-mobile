import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: 5,
    textAlign: 'center',
  },
});

const AppIntro = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Strength Exercise Tracking</Text>
    <Text style={styles.paragraph}>
      Use Gymmie to track your strength and weight lifting workouts at the gym.
    </Text>
  </View>
);

export default AppIntro;
