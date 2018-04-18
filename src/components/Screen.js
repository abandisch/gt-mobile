import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { APP_NAME, APP_SLOGAN, APP_AUTHOR } from '../config';
import Header from './Header';
import Footer from './AppFooter';

// TODO: Do something about the screens, so all info fits on one page
const Screen = ({ children, showFooter }) => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Header title={APP_NAME} slogan={APP_SLOGAN} />
      <View style={{ padding: 15 }}>{children}</View>
    </ScrollView>
    {showFooter ? <Footer appName={APP_NAME} appAuthor={APP_AUTHOR} /> : null}
  </View>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
};

Screen.defaultProps = {
  showFooter: true,
};

export default Screen;
