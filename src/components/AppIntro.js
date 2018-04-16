import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: 5,
  },
});

const AppIntro = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Strength Exercise Tracking</Text>
    <Text style={styles.paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
    <Text style={styles.paragraph}>
      Donec ornare tristique ligula at consectetur. In quis lorem vitae urna
      dignissim rutrum vitae non eros.
    </Text>
    <Text style={styles.paragraph}>
      Donec ornare tristique ligula at consectetur. In quis lorem vitae
      urna dignissim rutrum vitae non eros.
    </Text>
    <Text style={styles.paragraph}>
      Donec ornare tristique ligula at consectetur. In quis lorem vitae
      urna dignissim rutrum vitae non eros.
    </Text>
  </View>
);

export default AppIntro;
