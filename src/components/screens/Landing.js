import React from 'react';
import { View } from 'react-native';
import Screen from '../Screen';
import AppIntro from '../AppIntro';
import LoginButtonsSection from '../LoginButtonsSection';

const Landing = () => (
  <Screen>
    <View>
      <AppIntro />
      <LoginButtonsSection />
    </View>
  </Screen>);

export default Landing;
