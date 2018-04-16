import { shallow } from 'enzyme';
import React from 'react';
import AppIntro from './AppIntro';

describe('<AppIntro />', () => {
  it('renders without crashing', () => {
    shallow(<AppIntro />);
  });
});
