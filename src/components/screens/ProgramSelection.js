import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../Screen';
import ProgramList from '../ProgramList';
import GraphQLWrapper from '../../../src/containers/GraphQLWrapper';

const ProgramSelection = () => (
  <GraphQLWrapper>
    <Screen showFooter={false}>
      <View style={{ flex: 1 }}>
        <Text>Some intro text here about the training programs .... lorem ipsim</Text>
        <ProgramList />
      </View>
    </Screen>
  </GraphQLWrapper>);

// Menu
// -> resume program

export default ProgramSelection;
