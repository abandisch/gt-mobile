import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 1,
    maxHeight: 200,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

const Summary = ({ text }) => (
  <ScrollView style={styles.container}>
    <Text>{text}</Text>
  </ScrollView>
);

Summary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Summary;
