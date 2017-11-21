import React from 'react';
import { StyleSheet, View, StatusBar, Platform, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckListView from './components/DeckListView';
import NewDeckView from './components/NewDeckView';
import IndividualDeckView from './components/IndividualDeckView';
import NewQuestionView from './components/NewQuestionView';
import QuizView from './components/QuizView';
import { purple, white, lightGray } from "./utils/colors";
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';

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
            labelStyle: {
                fontSize: 12,
                fontWeight:'bold',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            style:{
                height:56,
                backgroundColor: Platform.OS==='ios'? lightGray: purple,
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffset:{
                    width:0,
                    height:3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    })



const headerStyle = {
    headerTintColor: white,
    headerStyle:{
        backgroundColor: purple
    }
}

const MainNavigator = StackNavigator({
    Home:{
        screen: Tabs
    },
    IndividualDeckView:{
        screen: IndividualDeckView,
        navigationOptions: headerStyle
    },
    NewQuestionView:{
        screen: NewQuestionView,
        navigationOptions: headerStyle
    },
    QuizView:{
        screen: QuizView,
        navigationOptions: headerStyle
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

  componentDidMount(){
      setLocalNotification()
  }

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
