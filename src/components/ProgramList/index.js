import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import ProgramListItem from '../ProgramListItem';

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    minHeight: 200,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export const CreateListItem = ({ item }) =>
  (<ProgramListItem
    {...item} // Contains id, name, summary
  />);

CreateListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  onSelectProgram: PropTypes.func.isRequired,
};

export const CreateList = ({ allPrograms }) => (
  <FlatList
    style={styles.list}
    data={allPrograms}
    renderItem={CreateListItem}
    keyExtractor={item => item.id}
  />
);

CreateList.propTypes = {
  allPrograms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
};

export const List = ({ programs, isLoadingSelectedProgram }) => {
  if (isLoadingSelectedProgram) {
    return <View><Text>Loading selected Training Program...</Text></View>;
  }
  if (programs.loading) {
    return (
      <Text style={styles.loading}>Getting Training Programs ...</Text>
    );
  }
  return <CreateList allPrograms={programs.allPrograms} />;
};

List.propTypes = {
  isLoadingSelectedProgram: PropTypes.bool.isRequired,
  programs: PropTypes.PropTypes.shape({}).isRequired,
};

const ALL_PROGRAMS_QUERY = gql`
  {allPrograms {
    id
    name
    summary
  }}`;

export const mapStateToProps = state => ({
  isLoadingSelectedProgram: !!state.loading.selectProgram,
});

export default compose(
  connect(mapStateToProps),
  graphql(ALL_PROGRAMS_QUERY, { name: 'programs' }),
  withApollo,
)(List);
