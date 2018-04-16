import React from 'react';
import { shallow } from 'enzyme';
import { Heading, mapStateToProps } from './index';
import * as utils from '../../utils';

describe('<Heading />', () => {
  it('renders without crashing', () => {
    const props = {
      programName: 'Test Program Name',
      weekNumber: 1,
      dayNumber: 2,
    };
    shallow(<Heading {...props} />);
  });
});

describe('# mapStateToProps', () => {
  it('should return the correct state', () => {
    const startDate = '2018-04-05';
    const expectedWeekNumber = utils.currentWeekNumber(startDate);
    const expectedDayNumber = utils.currentDayNumber(startDate);
    const initialState = {
      program: {
        name: 'Test Name',
        startDate,
      },
    };
    const expectedState = {
      programName: 'Test Name',
      weekNumber: expectedWeekNumber,
      dayNumber: expectedDayNumber,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
});
