import { shallow } from 'enzyme';
import React from 'react';
import { List, CreateList, mapStateToProps } from './index';

describe('<ProgramList />', () => {
  it('renders the page without crashing', () => {
    const programs = {
      allPrograms: [
        { id: '1', name: 'test1', summary: 'test summary 1' },
        { id: '2', name: 'test2', summary: 'test summary 2' },
        { id: '3', name: 'test3', summary: 'test summary 3' },
        { id: '4', name: 'test4', summary: 'test summary 4' },
      ],
    };
    shallow(<List
      isLoadingSelectedProgram={false}
      onSelectProgram={jest.fn()}
      programs={programs}
    />);
  });

  it('renders the loading page', () => {
    const programs = {
      loading: true,
    };
    shallow(<List
      onSelectProgram={jest.fn()}
      programs={programs}
      isLoadingSelectedProgram={false}
    />);
  });

  it('renders loading when a program is selected', () => {
    const programs = {
      allPrograms: [],
    };
    shallow(<List
      onSelectProgram={jest.fn()}
      isLoadingSelectedProgram
      programs={programs}
    />);
  });
});

describe('<CreateList />', () => {
  it('should render the4 FlatList of training programs', () => {
    const props = {
      onSelectProgram: jest.fn(),
      allPrograms: [
        { id: '1', name: 'test1', summary: 'test summary 1' },
        { id: '2', name: 'test2', summary: 'test summary 2' },
        { id: '3', name: 'test3', summary: 'test summary 3' },
        { id: '4', name: 'test4', summary: 'test summary 4' },
      ],
    };
    shallow(<CreateList {...props} />);
  });
});

describe('# mapStateToProps', () => {
  it('isLoadingSelectedProgram state should be true when loading', () => {
    const initialState = {
      loading: {
        selectProgram: true,
      },
    };
    const expectedState = {
      isLoadingSelectedProgram: true,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
  it('isLoadingSelectedProgram state should be false when not loading', () => {
    const initialState = {
      loading: {},
    };
    const expectedState = {
      isLoadingSelectedProgram: false,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
});
