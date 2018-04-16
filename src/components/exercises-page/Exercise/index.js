import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: 'darkgrey',
    margin: 10,
  },
  name: {
    backgroundColor: 'grey',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastSession: {
    backgroundColor: 'lightgrey',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#222',
    backgroundColor: 'lightgrey',
  },
  th: { // table header
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 3,
  },
  td: { // table data
    marginBottom: 3,
    marginTop: 3,
  },
  targets: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    borderColor: '#222',
  },
});

const Exercise = ({
  name, lastSession, targets, ptNote,
}) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    {
      lastSession ?
        (
          <View style={styles.lastSession}>
            <Text>Last Session: {lastSession.week} - {lastSession.day}</Text>
            <Text>Weight: {lastSession.weight} - Max Reps: {lastSession.reps}</Text>
          </View>
        ) :
          <View style={styles.lastSession}><Text>No previous session details</Text></View>
    }
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.th}>Del</Text>
        <Text style={styles.th}>Set #</Text>
        <Text style={styles.th}>Weight</Text>
        <Text style={styles.th}>Reps</Text>
        <Text style={styles.th}>Edit</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.td}>Click &apos;Add Set&apos; to record your set</Text>
      </View>
      <View style={styles.row}>
        <Button buttonStyle={{ backgroundColor: 'green', margin: 10 }} title="Add New Set" />
      </View>
      <View style={styles.targets}>
        <Text style={styles.th}>Target Sets & Reps</Text>
        <Text style={styles.td}>Sets: {targets.sets}, Reps: {targets.reps}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.td}>
          <Text style={styles.th}>PT Note: </Text>
          <Text>
            {ptNote || 'No notes for this exercise'}
          </Text>
        </Text>
      </View>
    </View>
  </View>
);

/*
        <Button style={buttonStyle.button}>
          <Text style={buttonStyle.text}>Add New Set</Text>
        </Button>
 */

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  lastSession: PropTypes.shape({
    week: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
  }),
  targets: PropTypes.shape({
    sets: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
  }).isRequired,
  ptNote: PropTypes.string,
};

Exercise.defaultProps = {
  lastSession: null,
  ptNote: '',
};

export default Exercise;
