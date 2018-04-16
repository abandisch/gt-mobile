import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  heading: {
    fontSize: 38,
    color: '#fff',
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: '#222',
  },
  slogan: {
    fontSize: 22,
    color: '#fff',
    fontVariant: ['small-caps'],
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: '#222',
  },
});

const headerImage = require('../assets/images/header-bg-480.jpg');

const Header = ({ title, slogan }) => (
  <ImageBackground source={headerImage} style={styles.container}>
    <Text style={styles.heading}>{title}</Text>
    <Text style={styles.slogan}>{slogan}</Text>
  </ImageBackground>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string,
};

Header.defaultProps = {
  slogan: '',
};

export default Header;
