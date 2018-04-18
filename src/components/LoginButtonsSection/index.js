import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import FacebookLoginButton from '../LoginButton/FacebookLogin';
import GoogleLoginButton from '../LoginButton/GoogleLogin';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#eee',
  },
  text: {
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export const LoginSection = ({ isLoading }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Login to start your workout</Text>
    {isLoading && <Text>Loading please wait...</Text>}
    {
      !isLoading &&
      <View>
        <FacebookLoginButton />
        <GoogleLoginButton />
      </View>
    }
  </View>
);

LoginSection.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export const mapStateToProps = state => ({
  isLoading: !!state.loading.login,
});

export default connect(mapStateToProps)(LoginSection);
