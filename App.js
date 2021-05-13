import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initData } from './actions/shared';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import NewQuestion from './components/NewQuestion';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import middleware from './middleware';
import reducers from './reducers';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FCView from './components/FCView';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, middleware)}>
        <FCView>
          <View style={{height: Constants.statusBarHeight}}>
            <StatusBar style='light'/>
          </View>
          <MainNavigator />
        </FCView>
      </Provider>
    );
  }
}

const defaultNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#333'
  }
}

const MainNavigator = createAppContainer(createStackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      headerShown: false
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: defaultNavigationOptions
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: defaultNavigationOptions
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: defaultNavigationOptions
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: defaultNavigationOptions
  }
}));