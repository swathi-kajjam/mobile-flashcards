import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TextButton from "./TextButton";
import { addingCardToDeck } from '../actions/flashCardActions';
import AppTextInput from './AppTextInput';
import { addCardToDeck } from '../utils/api';

/**
 * @description - Represents new question view component which allows to create new flash card
 * @returns {HTML} - return DOM for creating new question
 */
class NewQuestionView extends Component{
    static navigationOptions = {
        title: 'ADD CARD'
    }

    state = {
        title: this.props.title,
        question:'',
        answer:''
    }

    onChangeText = (prop, text) => {
        this.setState(()=> ({[prop]: text}))
    }

    onPress = () => {
        const {title, question, answer} = this.state;
        //Question card
        const card = {
            id: Math.random().toString(36).substr(-8),
            question: question,
            answer: answer
        }

        //update redux
        this.props.dispatch(addingCardToDeck(title, card))

        //clear State
        this.setState({question:'', answer:''});

        //redirect
        this.props.navigation.goBack();

        //update appStore
        addCardToDeck(title, card);

    }

    render(){
        return (
            <View style={styles.container}>
                <AppTextInput placeholder="Enter a Question"
                              style={{width:330}}
                              onChangeText={(text)=>this.onChangeText('question', text)}
                              value={this.state.question}
                              maxLength = {200}
                              multiline={true}
                />
                <AppTextInput placeholder="Enter Answer"
                              style={{width:330}}
                              onChangeText={(text)=>this.onChangeText('answer', text)}
                              value={this.state.answer}
                              maxLength = {300}
                              multiline={true}
                />
                <TextButton onPress={this.onPress} >SUBMIT</TextButton>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text:{
        width:330
    }
})


const mapStateToProps = (state, {navigation}) => {
    const {title} = navigation.state.params;
    return{
        title
    }
}

export default connect(mapStateToProps)(NewQuestionView)