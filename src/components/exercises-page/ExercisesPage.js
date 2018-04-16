import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { graphql, withApollo } from 'react-apollo';
import { compose } from 'recompose';
import gql from 'graphql-tag';

export const GET_PROGRAM_EXERCISES = gql`
  query findProgram ($programId: String!) {
    findProgram (id: $programId) {
        id
        name
        summary
        days {
          id
          dayType
          dayNumber
          
        }
      }
  }
`;

const ExercisesPage = ({ data }) =>
  // console.log('history:', history);
  (
    <ScrollView>
      <Text>
        This is the exercises page.
        The ID of the training program is: {data.loading && 'loading ...'} {!data.loading && data.variables.programId}
      </Text>
      {!data.loading && <Text style={{ marginTop: 20 }}>Id: {data.findProgram.id}</Text>}
      {!data.loading && <Text>Name: {data.findProgram.name}</Text>}
      {!data.loading && <Text>Summary: {data.findProgram.summary}</Text>}
      {!data.loading &&
        data.findProgram.days.map(day => (
          <View key={day.id} style={{ marginTop: 10 }}>
            <Text>id: {day.id}</Text>
            <Text>day type: {day.dayType}</Text>
            <Text>day number: {day.dayNumber}</Text>
          </View>))
      }
    </ScrollView>
  );
ExercisesPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default compose(
  graphql(
    GET_PROGRAM_EXERCISES,
    {
      options: props => ({
        variables: {
          programId: props.match.params.programId,
        },
      }),
    },
  ),
  withApollo,
)(ExercisesPage);
