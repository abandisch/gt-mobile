import React from 'react';
import { shallow } from 'enzyme';
import ExerciseBox, { LastSessionBox } from './index';

describe('<ExerciseBox />', () => {
  it('should render without crashing', () => {
    const props = {
      exerciseId: 'test-id',
      name: '',
      targets: { reps: 1, sets: 2 },
      ptNote: '',
      onPressAddSet: jest.fn(),
      showForm: false,
    };
    shallow(<ExerciseBox {...props} />);
  });

  it('should show the last session results', () => {
    const props = {
      exerciseId: 'test-id',
      name: '',
      lastSession: {
        week: 'week 1',
        day: 'day 1',
        weight: '20',
        reps: 10,
      },
      targets: { reps: 1, sets: 2 },
      ptNote: '',
    };
    shallow(<ExerciseBox {...props} />);
  });
});

describe('<LastSessionBox />', () => {
  it('renders without crashing', () => {
    const props = {
      lastSession: {
        week: 'week 1',
        day: 'day 1',
        weight: '20',
        reps: 10,
      },
    };
    shallow(<LastSessionBox {...props} />);
  });
});

