import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckListView from './components/DeckListView';
import NewDeckView from './components/NewDeckView';
import IndividualDeckView from './components/IndividualDeckView';
import { purple, white } from "./utils/colors";
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';


const Tabs = TabNavigator({
    DeckListView: {
        screen: DeckListView,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    },
    NewDeckView: {
        screen: NewDeckView,
        navigationOptions: {
            tabBarLabel: 'NEW DECK'
        }
    },
},
    {
        navigationOptions:{
            header:null
        },
        tabBarOptions:{
            activeTintColor:Platform.OS==='ios'? purple: white,
            style:{
                height:56,
                backgroundColor: Platform.OS==='ios'? white: purple,
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffset:{
                    width:0,
                    height:3
                },
                shadowRadius: 6,
                shadowOpacity: 1,
                padding:18
            }
        }
    })

const MainNavigator = StackNavigator({
    Home:{
        screen: Tabs
    },
    IndividualDeckView:{
        screen: IndividualDeckView
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
        <Provider store={createStore(reducer)}>
          <View style={styles.container}>
            <AppStatusBar backgroundColor={purple} barStyle='light-content'/>
            <MainNavigator/>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
