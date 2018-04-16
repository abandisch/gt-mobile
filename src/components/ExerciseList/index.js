import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import * as utils from '../../utils';

import ExerciseBox from '../ExerciseBox';

export const ListOfExercises = ({ data }) => {
  if (data.loading) {
    return <View><Text>Loading exercises ...</Text></View>;
  }
  const { exercises } = data.findByDay;
  return <ExercisesListView exercises={exercises} />;
};

export const SingleExerciseView = (ex) => {
  const props = {
    exerciseId: ex.id,
    name: ex.type,
    targets: {
      sets: ex.sets,
      reps: ex.reps,
    },
    ptNote: ex.comments,
  };
  return <ExerciseBox key={ex.id} {...props} />;
};

export const ExercisesListView = ({ exercises }) => (
  <ScrollView>
    {exercises.map(SingleExerciseView)}
  </ScrollView>);

ExercisesListView.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    reps: PropTypes.number.isRequired,
    sets: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  })).isRequired,
};

ListOfExercises.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

const GET_EXERCISES =
  gql`query findByDay ($programId: String!, $dayNumber: Int!) {
    findByDay (id: $programId, dayNumber: $dayNumber) {
      id
      dayType
      dayNumber
      exercises {
        id
        reps
        sets
        type
        comments
      }
    }
  }`;

export const mapStateToProps = state => ({
  dayNumber: utils.currentDayNumber(state.program.startDate),
  programId: state.program.id,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  graphql(
    GET_EXERCISES,
    {
      options: props => ({
        variables: {
          programId: props.programId,
          dayNumber: props.dayNumber,
        },
      }),
    },
  ),
  withApollo,
)(ListOfExercises);
