import React from 'react';
import { shallow } from 'enzyme';
import * as utils from '../../utils';
import { ListOfExercises, SingleExerciseView, ExercisesListView, mapStateToProps } from './index';

const exercises = [{
  id: 'fd861db4-afd0-4a6f-8bd0-0a4333d21ea2',
  reps: 74,
  sets: 1,
  type: 'bench press',
  comments: 'qui atque corporis at placeat et ducimus consequatur magnam ut veritatis',
},
{
  id: 'b5bc2ca9-6127-4718-ad2e-9c887aa502cc',
  reps: 38,
  sets: 5,
  type: 'deadlift',
  comments: 'earum enim maxime et quidem deserunt dolores soluta autem inventore est qui quia assumenda nam est qui labore cupiditate eveniet voluptate itaque non',
}];

describe('<SingleExerciseView />', () => {
  it('renders without crashing', () => {
    const exercise = {
      id: 'fd861db4-afd0-4a6f-8bd0-0a4333d21ea2',
      reps: 74,
      sets: 1,
      type: 'bench press',
      comments: 'qui atque corporis at placeat et ducimus consequatur magnam ut veritatis',
    };
    shallow(SingleExerciseView(exercise));
  });
});

describe('<ExercisesListView />', () => {
  it('renders without crashing', () => {
    shallow(<ExercisesListView exercises={exercises} />);
  });
});

describe('<ListOfExercises />', () => {
  it('renders the loading text without crashing', () => {
    const props = {
      data: {
        loading: true,
      },
    };
    shallow(<ListOfExercises {...props} />);
  });
  it('renders the exercises list without crashing', () => {
    const props = {
      data: {
        findByDay: {
          exercises,
        },
      },
    };
    shallow(<ListOfExercises {...props} />);
  });
});

describe('# mapStateToProps', () => {
  it('should return the correct state', () => {
    const startDate = '2018-04-05';
    const expectedDayNumber = utils.currentDayNumber(startDate);
    const initialState = {
      program: {
        id: 'test-id-1234567890',
        startDate,
      },
    };
    const expectedState = {
      dayNumber: expectedDayNumber,
      programId: 'test-id-1234567890',
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
});
