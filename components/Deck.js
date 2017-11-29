import React, { PureComponent } from 'react';
import {Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

/**
 * @description - Represents deck component
 * @returns {JSX} - return DOM for displaying deck
 */
class Deck extends PureComponent{
    state = {
        spinValue: new Animated.Value(0)
    }

    onPress = (title) => {
        const {spinValue} = this.state;
        spinValue.setValue(0);
        //Create Animation effect
        Animated.timing(spinValue, {toValue:1,
                                    duration:1500,
                                    useNativeDriver:true}
                       )
                .start();

        const self = this;
        setTimeout(function(){
            self.props.onPress(title);
        },1400)
    }

    render(){
        const {title, questions} = this.props;

        const spin = this.state.spinValue.interpolate({
            inputRange:[0,1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <Animated.View style={[styles.container, {transform:[{rotateY:spin}]}]}>
                <TouchableOpacity style={styles.btn} onPress={()=>this.onPress(title)}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.questionCount}>{questions.length} cards</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:100,
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        backgroundColor: 'white'
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