import React from 'react';
import { shallow } from 'enzyme';
import { LoginSection, mapStateToProps } from './index';

describe('<LoginSection />', () => {
  it('renders without crashing', () => {
    shallow(<LoginSection isLoading={false} />);
  });
  it('renders the loading screen', () => {
    shallow(<LoginSection isLoading />);
  });
});

describe('# mapStateToProps', () => {
  it('should return the correct state when loading', () => {
    const initialState = {
      loading: {
        login: true,
      },
    };
    const expectedState = {
      isLoading: true,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
  it('should return the correct state when not loading', () => {
    const initialState = {
      loading: { },
    };
    const expectedState = {
      isLoading: false,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
});
