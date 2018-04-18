import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#012940',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 15,
  },
  footerText: {
    color: '#eee',
    paddingBottom: 5,
  },
});

const AppFooter = ({ appName, appAuthor, copyrightYear }) => (
  <View style={styles.container}>
    <Text style={styles.footerText}>{appName} | By {appAuthor} | &copy; {copyrightYear}</Text>
  </View>
);

const defaultCopyrightYear = new Date().toISOString().split('-')[0];

AppFooter.propTypes = {
  appName: PropTypes.string.isRequired,
  appAuthor: PropTypes.string.isRequired,
  copyrightYear: PropTypes.string,
};

AppFooter.defaultProps = {
  copyrightYear: defaultCopyrightYear,
};

export default AppFooter;
