import React, { PureComponent } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextButton from './TextButton';
import AppTextInput from './AppTextInput';
import { saveDeckTitle } from '../utils/api';
import { connect } from 'react-redux';
import { createDeck } from '../actions/deckActions';
import ErrorMessage from './ErrorMessage';

/**
 * @description - Represents new deck view component which allows to create new Deck
 * @returns {JSX} - return DOM for creating new Deck
 */
class NewDeckView extends PureComponent{

    state = {
        title:'',
        showTitleError:false
    }

    submit=()=>{

        let {title} = this.state;

        //Validate Fields
        if(!title.trim()){
            this.setState({showTitleError:true});
            return;
        }

        //add to redux
        this.props.dispatch(createDeck(title));

        //clear state
        this.setState({title:'', showTitleError:false});

        //redirect to Deck View
        this.props.navigation.navigate(
            'IndividualDeckView',
            {title}
        )

        //Add to DB via AsyncStorage
        saveDeckTitle(title);
    }

    onChangeText = title => this.setState({title});

    render(){
        const {title, showTitleError} = this.state;

        return(
            <View style={styles.container}>
                <Text style={styles.text}>What is the title of your new deck?</Text>
                <AppTextInput placeholder="Enter title of deck"
                              name='title'
                              onChangeText={this.onChangeText}
                              value={title}
                              maxLength = {200}
                              multiline={true}
                />
                {showTitleError && <ErrorMessage msg="Please enter title of deck" />}
                <TextButton onPress={this.submit}> CREATE DECK </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text:{
        fontWeight:'bold',
        textAlign:'center'
    }
});

export default connect()(NewDeckView);

