import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import DeckListView from './components/DeckListView';
import NewDeckView from './components/NewDeckView';

const Tabs = TabNavigator({
    DeckListView:{
        screen: DeckListView,
        navigationOptions:{
            tabBarLabel:'DECKS'
        }
    },
    NewDeckView:{
        screen: NewDeckView,
        navigationOptions:{
            tabBarLabel:'NEW DECK'
        }
    }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
