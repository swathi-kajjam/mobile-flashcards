import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TextButton from "./TextButton";
import { addingCardToDeck } from '../actions/flashCardActions';
import AppTextInput from './AppTextInput';
import { addCardToDeck } from '../utils/api';
import ErrorMessage from './ErrorMessage';

/**
 * @description - Represents new question view component which allows to create new flash card
 * @returns {JSX} - return DOM for creating new question
 */
class NewQuestionView extends PureComponent{
    static navigationOptions = {
        title: 'ADD CARD'
    }

    state = {
        title: this.props.title,
        question:'',
        answer:'',
        showQuestionErr:false,
        showAnswerErr:false
    }

    onChangeText = (prop, text) => this.setState({[prop]: text});


    onSubmit = () => {
        const {
               title,
               question,
               answer
              } = this.state;

        //Validate Fields
        showQuestionErr = !question.trim();
        showAnswerErr = !answer.trim();

        if(showQuestionErr || showAnswerErr){
            this.setState({showQuestionErr, showAnswerErr});
            return;
        }

        //Question card
        const card = {
            id: Math.random().toString(36).substr(-8),
            question: question,
            answer: answer
        }

        //update redux
        this.props.dispatch(addingCardToDeck(title, card))

        //clear State
        this.setState({question:'', answer:'', showQuestionErr:false, showAnswerErr:false});

        //redirect
        this.props.navigation.goBack();

        //update appStore
        addCardToDeck(title, card);

    }

    render(){
        const { showQuestionErr, showAnswerErr} = this.state;

        return (
            <View style={styles.container}>
                <AppTextInput placeholder="Enter a Question"
                              style={{width:330}}
                              onChangeText={(text)=>this.onChangeText('question', text)}
                              value={this.state.question}
                              maxLength = {200}
                              multiline={true}
                />
                {showQuestionErr && <ErrorMessage msg="Please enter Question"/>}
                <AppTextInput placeholder="Enter Answer"
                              style={{width:330}}
                              onChangeText={(text)=>this.onChangeText('answer', text)}
                              value={this.state.answer}
                              maxLength = {300}
                              multiline={true}
                />
                {showAnswerErr && <ErrorMessage msg="Please enter Answer"/>}
                <TextButton onPress={this.onSubmit} >SUBMIT</TextButton>
            </View>
        )
    }
}

const mapStateToProps = (_, {navigation}) => {
    return{
        title: navigation.state.params.title
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
});

export default connect(mapStateToProps)(NewQuestionView)