import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, Image, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#001a35',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  heading: {
    fontSize: 26,
    color: '#fff',
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: '#222',
  },
  logo: {
    height: 32,
    width: 32,
    marginRight: 15,
  },
});

const logo = require('../assets/images/app-icon.png');

const Header = ({ title }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.heading}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
