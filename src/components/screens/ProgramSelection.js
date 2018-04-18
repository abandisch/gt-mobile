import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../Screen';
import ProgramList from '../ProgramList';
import GraphQLWrapper from '../../../src/containers/GraphQLWrapper';

const ProgramSelection = () => (
  <GraphQLWrapper>
    <Screen showFooter={false}>
      <View>
        <Text>Please choose from one of the predefned workout programs.</Text>
        <ProgramList />
      </View>
    </Screen>
  </GraphQLWrapper>);

// Menu
// -> resume program

export default ProgramSelection;
