import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm, reset } from 'redux-form';
import TextField from './TextField';
import styles from './styles';
import { addSetToExercise } from '../../actions';

export const InputForm = ({
  showForm, onPressToggleForm, onFormSubmitted,
}) => (
  showForm ?
    <View style={styles.formContainer}>
      <Field
        name="weight"
        label="Weight"
        placeholder="E.g. 10 or Body Weight"
        maxLength={25}
        styles={{
            formLabel: StyleSheet.flatten(styles.formLabel),
            formInput: StyleSheet.flatten(styles.formInput),
          }}
        component={TextField}
      />
      <Field
        name="reps"
        label="Reps"
        placeholder="Number of reps"
        maxLength={20}
        styles={{
            formLabel: StyleSheet.flatten(styles.formLabel),
            formInput: StyleSheet.flatten(styles.formInput),
          }}
        keyboardType="numeric"
        component={TextField}
      />
      <Button
        icon={{ name: 'playlist-add-check' }}
        onPress={onFormSubmitted}
        buttonStyle={styles.btnSave}
        fontSize={15}
        title="Save"
      />
      <Button
        icon={{ name: 'clear' }}
        onPress={onPressToggleForm}
        buttonStyle={styles.btnCancel}
        fontSize={15}
        title="Cancel"
      />
    </View> :
    <View style={styles.formContainer}>
      <Button
        icon={{ name: 'playlist-add' }}
        onPress={onPressToggleForm}
        buttonStyle={styles.btnAddSet}
        fontSize={15}
        title="Add Set"
      />
    </View>
);

InputForm.propTypes = {
  onFormSubmitted: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
  onPressToggleForm: PropTypes.func.isRequired,
};

export class SetForm extends React.Component {
  state = {
    showForm: false,
  }

  onPressToggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
    this.resetForm();
  }

  onFormSubmitted = () => (values) => {
    const { addExerciseSet } = this.props;
    const { weight, reps } = values;
    this.hideForm();
    this.resetForm();
    addExerciseSet(weight, reps);
  }

  hideForm = () => {
    this.setState({
      showForm: false,
    });
  }

  resetForm = () => {
    const { resetForm } = this.props;
    resetForm();
  }

  render() {
    const { handleSubmit } = this.props; // handleSubmit is from redux-form
    return (
      <InputForm
        onFormSubmitted={handleSubmit(this.onFormSubmitted())}
        showForm={this.state.showForm}
        onPressToggleForm={this.onPressToggleForm}
      />);
  }
}

SetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  exerciseId: PropTypes.string.isRequired,
  resetForm: PropTypes.func.isRequired,
  addExerciseSet: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetForm: () => dispatch(reset('setForm')),
  addExerciseSet: (weight, reps) =>
    dispatch(addSetToExercise(ownProps.exerciseId, { weight, reps })),
});

export default compose(
  reduxForm({
    form: 'setForm',
  }),
  connect(null, mapDispatchToProps),
)(SetForm);
