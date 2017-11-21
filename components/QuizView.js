import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDeck } from '../utils/api';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { clearNotification, setLocalNotification } from '../utils/helpers';

class QuizView extends Component{
    static navigationOptions = {
        title: 'QUIZ'
    }

    state = {
        deck:[],
        totalCards: [],
        currentCard:{},
        currentCardNbr: 0,
        displayQuestion: true,
        correctlyAnswered:0,
        displayScoreCard: false
    }

    componentDidMount(){

        const { title } = this.props;

        getDeck(title)
            .then(deck => {

                const cardCount = deck.questions.length;

                cardCount>0 && this.setState({ deck,
                                               totalCards:cardCount,
                                               currentCard:deck.questions[0],
                                               currentCardNbr:1})
            })
    }

    onLinkPress=() => {
        this.setState((state)=> ({
            displayQuestion: !state.displayQuestion
        }))
    }

    onPressNext=() => {
        let {currentCardNbr, deck} = this.state;

        if(currentCardNbr < deck.questions.length){
            const currentCard = deck.questions[currentCardNbr];
            currentCardNbr = currentCardNbr+1;
            this.setState({currentCardNbr, currentCard, displayQuestion:true})
        }
        else{
            this.setState({displayScoreCard:true});
            clearNotification();
            setLocalNotification();
        }
    }

    onOptionPress=(option) => {
        const {currentCard, correctlyAnswered} = this.state;
        if(option === 'yes'){
            this.setState({correctlyAnswered: correctlyAnswered+1})
        }
    }

    displayScore=() => {
        const {totalCards, correctlyAnswered} = this.state;
        return parseInt((correctlyAnswered/totalCards)*100);
    }

    backToDeck = () => {
        this.props.navigation.navigate(
            'IndividualDeckView',
            {title: this.props.title}
        )
    }

    restartQuiz = () => {
        this.setState((state)=> ({
            currentCardNbr: 1,
            displayQuestion: true,
            correctlyAnswered:0,
            displayScoreCard: false,
            currentCard: state.deck.questions[0]
        }))
    }

    render(){
        const { currentCard, totalCards, currentCardNbr, displayQuestion, displayScoreCard, correctlyAnswered } = this.state;
        return(
            displayScoreCard ?
                <View style={styles.scoreCard}>
                    <Text style={styles.text}> Total Questions: {totalCards}</Text>
                    <Text style={styles.text}> Correctly Answered: {correctlyAnswered}</Text>
                    <Text style={[styles.text, {marginBottom:30}]}> Your Score: {this.displayScore()} %</Text>
                    <TextButton onPress={this.restartQuiz}>Restart Quiz</TextButton>
                    <TextButton btnStyle={{backgroundColor:'gray'}} onPress={this.backToDeck}>Back to Deck</TextButton>
                </View>:
                <View style={styles.container}>
                    <Text style={styles.remainingQuestions}> {`${currentCardNbr} / ${totalCards}`} </Text>
                    <View style={styles.center}>
                        <Text style={styles.question}> {displayQuestion ? currentCard.question: currentCard.answer} </Text>
                        <TouchableOpacity onPress={this.onLinkPress}>
                            <Text style={styles.answer}>{displayQuestion ? 'Answer': 'Question'}</Text>
                        </TouchableOpacity>
                        <TextButton btnStyle={{backgroundColor:'green'}} onPress={()=>this.onOptionPress('yes')}>Correct</TextButton>
                        <TextButton btnStyle={{backgroundColor:'red'}} onPress={()=>this.onOptionPress('no')}>InCorrect</TextButton>
                        <TextButton btnStyle={{backgroundColor:'gray'}} onPress={this.onPressNext}>Next</TextButton>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    scoreCard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor: 'white'
    },
    center:{
       alignSelf:'center'
    },
    question:{
        fontSize:26,
        fontWeight: 'bold',
        textAlign:'center',
        padding:10
    },
    answer:{
        color:'red',
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center',
        paddingBottom:20
    },
    text:{
        fontWeight:'bold',
        fontSize:20
    },
    remainingQuestions:{
        fontSize:14,
        fontWeight:'bold',
        color:'gray',
        paddingTop:20
    }
})

const mapStateToProps = (state, {navigation}) => {
    const {title} = navigation.state.params;
    return {
        title
    }
}

export default connect(mapStateToProps)(QuizView);


