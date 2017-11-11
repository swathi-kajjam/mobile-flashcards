import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import DeckListView from './components/DeckListView';
import NewDeckView from './components/NewDeckView';
import { purple } from "./utils/colors";
import { Constants } from 'expo';

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

function AppStatusBar({backgroundColor, ...props}){
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar backgroundColor={purple} barStyle='light-content'/>
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
