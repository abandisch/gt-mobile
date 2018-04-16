import React from 'react';
import { shallow } from 'enzyme';
import { FacebookLogin, mapDispatchToProps } from './FacebookLogin';

describe('<LoginFacebookButton />', () => {
  it('renders without crashing', () => {
    shallow(<FacebookLogin onPressButton={jest.fn()} />);
  });

  it('calls onPress when pressed', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<FacebookLogin onPressButton={dispatch} />);
    wrapper.find('Button').simulate('press');
    expect(dispatch).toHaveBeenCalled();
  });

  it('should call the dispatch function when onPressButton is executed', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onPressButton();
    expect(dispatch).toHaveBeenCalled();
  });
});
