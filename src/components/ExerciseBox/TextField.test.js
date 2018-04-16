import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheet } from 'react-native';
import TextField from './TextField';

describe('<TextField />', () => {
  it('renders without crashing', () => {
    const styles = StyleSheet.create({
      formLabel: { },
      formInput: { },
    });
    const props = {
      label: 'test label',
      placeholder: 'test field',
      styles,
      input: { onChange: jest.fn() },
    };
    shallow(<TextField {...props} />);
  });
});

