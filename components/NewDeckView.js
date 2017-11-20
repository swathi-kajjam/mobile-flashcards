import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextButton from './TextButton';
import AppTextInput from './AppTextInput';
import { saveDeckTitle } from '../utils/api';
import { connect } from 'react-redux';
import { createDeck } from '../actions/deckActions';

class NewDeckView extends Component{

    state = {
        title:''
    }

    submit=()=>{
        const {title} = this.state;

        //add to redux
        this.props.dispatch(createDeck(title));

        //clear state
        this.setState({title:''});

        //redirect to Deck View
        this.props.navigation.navigate(
            'IndividualDeckView',
            {title}
        )

        //Add to DB via AsyncStorage
        saveDeckTitle(title);
    }

    onChangeText = (title) => {
        this.setState({title})
    }

    render(){
        const {title} = this.state;

        return(
            <View style={styles.container}>
                <Text>What is the title of your new deck?</Text>
                <AppTextInput name='title' onChangeText={this.onChangeText} value={title}/>
                <TextButton onPress={this.submit}> CREATE DECK </TextButton>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default connect()(NewDeckView);

