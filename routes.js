import { TabNavigator, StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { purple, white, lightGray } from "./utils/colors";
import DeckListView from './components/DeckListView';
import NewDeckView from './components/NewDeckView';
import IndividualDeckView from './components/IndividualDeckView';
import NewQuestionView from './components/NewQuestionView';
import QuizView from './components/QuizView';

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
    });


const headerStyle = {
    headerTintColor: white,
    headerStyle:{
        backgroundColor: purple
    },
    headerTitleStyle:{
        alignSelf:'center',
        marginLeft: Platform.OS==='ios'?0:-40
    },
    headerBackTitle:' '
}

export const MainNavigator = StackNavigator({
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