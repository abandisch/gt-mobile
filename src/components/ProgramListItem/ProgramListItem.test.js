import { shallow } from 'enzyme';
import React from 'react';
import { TrainingProgramListItem, ProgramItem, mapDispatchToProps } from './index';

describe('<TrainingProgramListItem />', () => {
  it('renders without crashing', () => {
    const props = {
      id: '1234567890',
      name: 'Test name',
      summary: 'test summary...',
      onPressSelectProgram: jest.fn(),
    };
    shallow(<TrainingProgramListItem {...props} />);
  });

  it('should show the summary when the program is pressed', () => {
    const props = {
      id: '1234567890',
      name: 'Test name',
      summary: 'test summary...',
      onPressSelectProgram: jest.fn(),
    };
    const wrapper = shallow(<TrainingProgramListItem {...props} />);
    wrapper.find('ProgramItem').simulate('pressShowSummary');
    expect(wrapper.find('ProgramItem').prop('showSummary')).toEqual(true);
  });

  it('renders the ProgramItem without summary', () => {
    const props = {
      id: '1234567890',
      name: 'Test name',
      summary: 'test summary...',
      onPressSelectProgram: jest.fn(),
      onPressShowSummary: jest.fn(),
      showSummary: false,
    };
    shallow(<ProgramItem {...props} />);
  });

  it('renders the ProgramItem with summary', () => {
    const props = {
      id: '1234567890',
      name: 'Test name',
      summary: 'test summary...',
      onPressSelectProgram: jest.fn(),
      onPressShowSummary: jest.fn(),
      showSummary: true,
    };
    shallow(<ProgramItem {...props} />);
  });
});

describe('# mapDispatchToProps', () => {
  it('redirects to the exercise page after dispatching selectProgram', () => {
    const dispatch = jest.fn();
    const ownProps = {
      history: {
        push: jest.fn(),
      },
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve());

    mapDispatchToProps(dispatch, ownProps).onPressSelectProgram();
    expect(dispatch).toHaveBeenCalled();
  });
});
