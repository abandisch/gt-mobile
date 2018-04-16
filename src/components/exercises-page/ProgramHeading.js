import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'grey',
  },
  innerContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const ProgramHeading = ({ programName, week, day }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{programName}</Text>
    <View style={styles.innerContainer}>
      <Text>{week} - </Text>
      <Text>{day}</Text>
    </View>
  </View>
);

ProgramHeading.propTypes = {
  programName: PropTypes.string.isRequired,
  week: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
};

export default ProgramHeading;
