import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import GraphQLWrapper from '../../../src/containers/GraphQLWrapper';
import ProgramExercises from '../../../src/components/screens/ProgramExercises';
import configureStore from '../../../configureStore';
import Landing from '../../../src/components/screens/Landing';
import ProgramSelection from '../../../src/components/screens/ProgramSelection';

const store = configureStore();

storiesOf('Screens', module)
  .add('Landing', () =>
    (
      <Provider store={store}>
        <Landing />
      </Provider>
    ))
  .add('Program Selection', () =>
    (
      <GraphQLWrapper>
        <Provider store={store}>
          <NativeRouter>
            <ProgramSelection />
          </NativeRouter>
        </Provider>
      </GraphQLWrapper>
    ))
  .add('ProgramExercises Screen', () => (
    <GraphQLWrapper>
      <Provider store={store}>
        <NativeRouter>
          <ProgramExercises />
        </NativeRouter>
      </Provider>
    </GraphQLWrapper>));


/*   .add('ProgramExercises Screen with Router', () => (
    <GraphQLWrapper>
      <Provider store={store}>
        <NativeRouter>
          <View>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/exercises" />}
            />
            <Route path="/exercises" component={ProgramExercises} />
          </View>
        </NativeRouter>
      </Provider>
    </GraphQLWrapper>
  )); */


/*     .add('ProgramExercises Screen with Router', () => (
      <GraphQLWrapper>
        <NativeRouter>
          <View>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/exercises/1742e8f9-2fb7-4dba-9787-4b84dc680d84" />}
            />
            <Route path="/exercises/:programId" component={ProgramExercises} />
          </View>
        </NativeRouter>
      </GraphQLWrapper>
    ))
    .add('ProgramExercises Screen without Router', () => {
      const match = { params: { programId: '1742e8f9-2fb7-4dba-9787-4b84dc680d84' } };
      return (
        <GraphQLWrapper>
          <ProgramExercises match={match} />
        </GraphQLWrapper>
      );
    }); */

/*   .add('Exercises', () => {
    const match = { params: { programId: '1742e8f9-2fb7-4dba-9787-4b84dc680d84' } };
    return (
      <GraphQLWrapper>
        <Exercises match={match} />
      </GraphQLWrapper>
    );
  }); */
/*   .add('ExercisesView', () => {
    const exercises = [{ name: 'ex1' }, { name: 'more ppush ups' }];
    console.log(ExercisesView);
    return (
      <View>
        <Text>what if</Text>
      </View>
    );
    return (
      <ExercisesView exercises={exercises} />
    );
  }); */

