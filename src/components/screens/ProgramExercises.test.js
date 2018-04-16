import React from 'react';
import { shallow } from 'enzyme';
import ProgramExercises from './ProgramExercises';

describe('<ProgramExercises />', () => {
  it('renders without crashing', () => {
    shallow(<ProgramExercises />);
  });
});
