import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { getDeck } from "../utils/helpers";

/**
 * @description - Represents individual deck view component
 * @returns {HTML} - return DOM for displaying deck information along with options to startQuiz / Add Question
 */
class IndividualDeckView extends Component{

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params;
        return {
            title
        }
    }

    addCard=()=>{
        const {title}= this.props;

        this.props.navigation.navigate(
            'NewQuestionView',
            {title}
        )
    }

    startQuiz=()=>{
        const {title}= this.props;

        this.props.navigation.navigate(
            'QuizView',
            {title}
        )
    }

    render(){
        const {title, deck} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}> {title}</Text>
                <Text style={styles.cardCount}> {deck.questions ? deck.questions.length : 0} cards</Text>
                <TextButton onPress={this.addCard}>Create New Question</TextButton>
                {deck.questions.length > 0 && <TextButton
                                                    btnStyle={styles.quizBtn}
                                                    onPress={this.startQuiz}>Start a Quiz
                                                </TextButton>
                }
            </View>
        )
    }
}


const mapStateToProps = (state, {navigation}) => {
    const {title} = navigation.state.params;

    return{
        title,
        deck: getDeck(state.deckReducer.byId, title)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        padding:20
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24
    },
    cardCount:{
        color:'gray',
        fontSize: 18,
        margin:10
    },
    quizBtn:{
        backgroundColor:'gray'
    }
})

export default connect(mapStateToProps)(IndividualDeckView)