import React from 'react';
import { shallow } from 'enzyme';
import { GoogleLogin, mapDispatchToProps } from './GoogleLogin';
// import { loginWithGoogle } from '../../actions/login';

describe('<GoogleLogin />', () => {
  it('renders without crashing', () => {
    shallow(<GoogleLogin onPressButton={jest.fn()} />);
  });

  it('calls onPress when pressed', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<GoogleLogin onPressButton={dispatch} />);
    wrapper.find('Button').simulate('press');
    expect(dispatch).toHaveBeenCalled();
  });

  it('should call the dispatch function when onPressButton is executed', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onPressButton();
    expect(dispatch).toHaveBeenCalled();
  });
});
