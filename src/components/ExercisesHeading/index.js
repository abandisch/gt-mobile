import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as utils from '../../utils';

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eee',
    backgroundColor: '#012940',
    paddingTop: 15,
    paddingBottom: 5,
  },
  subheader: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eee',
    backgroundColor: '#012940',
    paddingBottom: 15,
    paddingTop: 5,
  },
});

export const Heading = ({ programName, weekNumber, dayNumber }) => (
  <View>
    <Text style={styles.header}>{programName}</Text>
    <Text style={styles.subheader}>{`Week ${weekNumber} - Day ${dayNumber}`}</Text>
  </View>
);

Heading.propTypes = {
  programName: PropTypes.string.isRequired,
  weekNumber: PropTypes.number.isRequired,
  dayNumber: PropTypes.number.isRequired,
};

export const mapStateToProps = state => ({
  programName: state.program.name,
  weekNumber: utils.currentWeekNumber(state.program.startDate),
  dayNumber: utils.currentDayNumber(state.program.startDate),
});

export default connect(mapStateToProps)(Heading);
