import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles';

const setRow = set => (
  <View key={set.setNumber} style={styles.row}>
    <View style={styles.td}>
      <Text>{set.setNumber}</Text>
    </View>
    <View style={styles.td}>
      <Text>{set.weight}</Text>
    </View>
    <View style={styles.td}>
      <Text>{set.reps}</Text>
    </View>
  </View>
);

export const SetTable = ({ sets }) => (
  <View style={styles.table}>
    <View style={styles.row}>
      <View style={styles.td}><Text style={styles.textBold}>Set #</Text></View>
      <View style={styles.td}><Text style={styles.textBold}>Weight</Text></View>
      <View style={styles.td}><Text style={styles.textBold}>Reps</Text></View>
    </View>
    {
      sets.length > 0 ?
        <View>
          {sets.map(set => setRow(set))}
        </View>
      :
        <View style={styles.row}>
          <View style={styles.td}>
            <Text>Click &apos;Add Set&apos; to record your set</Text>
          </View>
        </View>
    }
  </View>
);

SetTable.propTypes = {
  sets: PropTypes.arrayOf(PropTypes.shape({
    setNumber: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
  })),
};

SetTable.defaultProps = {
  sets: [],
};

const mapStateToProps = (state, ownProps) => ({
  sets: state.exercises[ownProps.exerciseId],
});

export default connect(mapStateToProps)(SetTable);
