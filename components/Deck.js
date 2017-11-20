import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

class Deck extends Component{
    constructor(props){
        super(props);
    }

    onPress = (title) => {
        this.props.onPress(title);
    }

    render(){
        const {title, questions} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={()=>this.onPress(title)}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.questionCount}>{questions.length} cards</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:100,
        borderBottomWidth: 2,
        borderBottomColor: 'gray'
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight: 'bold',

    },
    questionCount:{
        color:'gray',
        justifyContent:'center',
        alignItems:'center'
    }

});

export default Deck;