import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

const TextField = ({
  label, placeholder, styles, keyboardType, maxLength, input,
}) => {
  const { onChange, ...restInput } = input;
  return (
    <View>
      <FormLabel style={styles.formLabel}>{label}</FormLabel>
      <FormInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        style={styles.formInput}
        onChangeText={onChange}
        {...restInput}
      />
    </View>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    formLabel: PropTypes.shape({}).isRequired,
    formInput: PropTypes.shape({}).isRequired,
  }).isRequired,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  input: PropTypes.shape({}).isRequired,
};

TextField.defaultProps = {
  keyboardType: 'default',
  maxLength: 20,
};

export default TextField;
