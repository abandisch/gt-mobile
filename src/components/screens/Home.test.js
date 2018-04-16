import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps } from './Home';

describe('<Home />', () => {
  it('renders without crashing', () => {
    shallow(<Home isLoggedIn={false} />);
  });

  it('redirects to the select program page when logged in', () => {
    const wrapper = shallow(<Home isLoggedIn />);
    expect(wrapper.find('Redirect')).toHaveLength(1);
  });
});

describe('# mapStateToProps', () => {
  it('should return the correct state when the user is logged in', () => {
    const initialState = {
      user: {
        gymTrackerJWT: {},
      },
    };
    const expectedState = {
      isLoggedIn: true,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });

  it('should return the correct state when the user is not logged in', () => {
    const initialState = {
      user: {},
    };
    const expectedState = {
      isLoggedIn: false,
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expectedState);
  });
});
