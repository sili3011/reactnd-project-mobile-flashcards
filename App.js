import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initData } from './actions/shared';
import { DeckList } from './components/DeckList';
import reducers from './reducers';

export default class App extends React.Component {

  componentDidMount() {
    initData();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <View style={{height: Constants.statusBarHeight}}>
            <StatusBar style='light'/>
          </View>
          <DeckList></DeckList>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
