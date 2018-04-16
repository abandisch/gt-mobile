import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { selectProgram } from '../../actions';

const styles = {
  container: {
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    color: '#222',
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    color: '#222',
  },
};

export const ProgramItem = ({
  id, name, summary, onPressShowSummary, onPressSelectProgram, showSummary,
}) => {
  const selectButtonProps = {
    rightIcon: { name: 'check-circle' },
    title: 'Select Training Program',
    onPress: () => onPressSelectProgram(id, name),
    buttonStyle: {
      backgroundColor: '#31bb5a',
    },
  };
  const programButtonProps = {
    rightIcon: { name: 'info-outline' },
    title: name,
    onPress: onPressShowSummary,
    buttonStyle: {
      backgroundColor: '#003366',
    },
  };
  return (
    <View style={styles.container}>
      <Button {...programButtonProps} />
      {showSummary && (
        <View style={{ flex: 1 }}>
          <Text style={styles.heading}>Program Summary</Text>
          <Text style={styles.text}>{summary}</Text>
          <Button {...selectButtonProps} />
        </View>)}
    </View>
  );
};

ProgramItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  showSummary: PropTypes.bool.isRequired,
  onPressShowSummary: PropTypes.func.isRequired,
  onPressSelectProgram: PropTypes.func.isRequired,
};

export class TrainingProgramListItem extends React.Component {
  state = {
    showSummary: false,
  };

  onPressShowSummary = () => {
    this.setState({
      showSummary: !this.state.showSummary,
    });
  };

  render() {
    return (<ProgramItem
      onPressShowSummary={this.onPressShowSummary}
      showSummary={this.state.showSummary}
      {...this.props}
    />);
  }
}

TrainingProgramListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  onPressSelectProgram: PropTypes.func.isRequired,
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onPressSelectProgram: (programId, programName) => {
    Promise.resolve(dispatch(selectProgram(programId, programName)))
      .then(() => ownProps.history.push(`/exercises/${programId}`));
  },
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(TrainingProgramListItem);
