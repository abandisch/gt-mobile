import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Exercise from '../../../src/components/exercises-page/Exercise';
import ProgramHeading from '../../../src/components/exercises-page/ProgramHeading';
import Summary from '../../../src/components/exercises-page/Summary';
import ExercisesPage from '../../../src/components/exercises-page/ExercisesPage';
import GraphQLWrapper from '../../../src/containers/GraphQLWrapper';

storiesOf('Exercise Program Page', module)
  .add('default', () => {
    const props = {
      match: {
        params: {
          programId: '1742e8f9-2fb7-4dba-9787-4b84dc680d84',
        },
      },
    };
    return (
      <GraphQLWrapper>
        <ExercisesPage {...props} />
      </GraphQLWrapper>
    );
  })
  .add('Program Heading', () => {
    const props = {
      programName: 'Jumbo Exercises',
      week: 'Week 1',
      day: 'day 2',
    };
    return <ProgramHeading {...props} />;
  })
  .add('Summary', () => {
    const props = {
      text: 'PT Summary ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. Pellentesque sagittis pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. Pellentesque sagitti       text: \'PT Summary ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. Pellentesque sagittis pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. Pellentesque sagitti',
    };
    return <Summary {...props} />;
  });

storiesOf('Exercise', module)
  .add('Exercise - default', () => {
    const props = {
      name: 'Dips',
      lastSession: {
        week: 'Week 1',
        day: 'Day 3',
        weight: '10',
        reps: 15,
      },
      targets: {
        sets: 1,
        reps: 5,
      },
      ptNote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. ',
    };

    return <Exercise {...props} />;
  })
  .add('Exercise - no last session details', () => {
    const props = {
      name: 'Dips',
      targets: {
        sets: 1,
        reps: 5,
      },
      ptNote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi lobortis, sagittis augue ac, venenatis enim. ',
    };

    return <Exercise {...props} />;
  })
  .add('Exercise - No PT notes', () => {
    const props = {
      name: 'Dips',
      lastSession: {
        week: 'Week 1',
        day: 'Day 3',
        weight: '10',
        reps: 15,
      },
      targets: {
        sets: 1,
        reps: 5,
      },
    };

    return <Exercise {...props} />;
  });
