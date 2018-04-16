import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginWithGoogle } from '../../actions/login';

export const GoogleLogin = ({ onPressButton }) => {
  const props = {
    onPress: onPressButton,
    icon: { name: 'google', type: 'font-awesome', color: 'white' },
    title: 'Sign in with Google',
    buttonStyle: {
      backgroundColor: '#4185f4',
      marginBottom: 10,
    },
    color: 'white',
    fontWeight: 'bold',
    rounded: true,
  };
  return <Button {...props} />;
};

GoogleLogin.propTypes = {
  onPressButton: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  onPressButton: () => dispatch(loginWithGoogle()),
});

export default connect(null, mapDispatchToProps)(GoogleLogin);

