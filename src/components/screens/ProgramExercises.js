import React from 'react';
import { View } from 'react-native';
import Screen from '../Screen';
import ExercisesHeading from '../ExercisesHeading';
import ExerciseList from '../ExerciseList';

const ProgramExercises = () => (
  <Screen showFooter={false}>
    <View>
      <ExercisesHeading />
      <ExerciseList />
    </View>
  </Screen>
);

// Menu
// -> change program
// -> logout

export default ProgramExercises;

