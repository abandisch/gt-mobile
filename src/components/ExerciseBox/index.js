import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ExerciseSetForm from './SetForm';
import ExerciseSetTable from './SetTable';
import styles from './styles';

export const LastSessionBox = ({ lastSession }) => (
  lastSession ?
    (
      <View style={styles.lastSession}>
        <Text style={styles.lastSessionText}>
            Last Session: {lastSession.week} - {lastSession.day}
        </Text>
        <Text style={styles.lastSessionText}>
            Weight: {lastSession.weight} - Max Reps: {lastSession.reps}
        </Text>
      </View>
    ) :
      <View style={styles.lastSession}>
        <Text style={styles.lastSessionText}>No previous session details</Text>
      </View>
);

LastSessionBox.propTypes = {
  lastSession: PropTypes.shape({
    week: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
  }),
};

LastSessionBox.defaultProps = {
  lastSession: null,
};

const ExerciseBox = ({
  exerciseId, name, lastSession, targets, ptNote,
}) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name.toUpperCase()}</Text>
    <LastSessionBox lastSession={lastSession} />
    <ExerciseSetTable exerciseId={exerciseId} />
    <ExerciseSetForm exerciseId={exerciseId} />
    <View style={styles.targetsContainer}>
      <Text style={styles.targetsHeading}>TARGET SETS & REPS:</Text>
      <Text style={styles.targets}>Sets: {targets.sets}  Reps: {targets.reps}</Text>
    </View>
    <View style={styles.ptNoteContainer}>
      <Text style={styles.ptNoteHeading}>Exercise Notes: </Text>
      <Text style={styles.ptNoteText}>{ptNote || 'No notes for this exercise'}</Text>
    </View>
  </View>
);

ExerciseBox.propTypes = {
  exerciseId: PropTypes.string.isRequired,
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

ExerciseBox.defaultProps = {
  lastSession: null,
  ptNote: '',
};

export default ExerciseBox;
