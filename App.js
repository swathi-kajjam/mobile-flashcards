import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { purple, white } from "./utils/colors";
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';
import { MainNavigator } from "./routes";

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
    backgroundColor: white,
  },
});
