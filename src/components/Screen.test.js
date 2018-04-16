import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Screen from './Screen';

describe('<Screen />', () => {
  it('renders without crashing', () => {
    shallow(<Screen><Text>Test Screen</Text></Screen>);
  });

  it('renders without the footer', () => {
    shallow(<Screen showFooter={false}><Text>Test Screen</Text></Screen>);
  });
});
