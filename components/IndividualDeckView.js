import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { getDeck } from "../utils/helpers";

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
                <Text style={styles.questionCount}> {deck.questions ? deck.questions.length : 0} cards</Text>
                <TextButton style={styles.addCardBtn} onPress={this.addCard}>Add Card</TextButton>
                <TextButton style={styles.quizBtn} onPress={this.startQuiz}>Start Quiz</TextButton>
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
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22
    },
    questionCount:{
        color:'gray',
        fontSize: 14,
        margin:10
    },
    addCardBtn:{
        margin:10
    },
    quizBtn:{
        backgroundColor:'gray',
        color:'black'
    }
})

export default connect(mapStateToProps)(IndividualDeckView)