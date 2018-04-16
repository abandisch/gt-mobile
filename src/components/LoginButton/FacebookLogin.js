import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginWithFacebook } from '../../actions/login';

export const FacebookLogin = ({ onPressButton }) => {
  const props = {
    onPress: onPressButton,
    icon: { name: 'facebook', type: 'font-awesome' },
    title: 'Login with Facebook',
    buttonStyle: {
      backgroundColor: '#3B5998',
      marginBottom: 10,
    },
    rounded: true,
  };
  return <Button {...props} />;
};

FacebookLogin.propTypes = {
  onPressButton: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  onPressButton: () => dispatch(loginWithFacebook()),
});

export default connect(null, mapDispatchToProps)(FacebookLogin);
