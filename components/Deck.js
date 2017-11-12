import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Deck extends Component{
    state = {
        title: this.props.title,
        cardCount: this.props.cardCount
    }

    onPress = () => {
        const {title} = this.state;
        this.props.onPress(title)
    }

    render(){
        const {title, cardCount} = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={this.onPress}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.cardCount}>{cardCount} cards</Text>
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
    cardCount:{
        color:'gray',
        justifyContent:'center',
        alignItems:'center'
    },

});

export default Deck;