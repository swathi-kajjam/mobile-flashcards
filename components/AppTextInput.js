import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { gray } from "../utils/colors";

/**
 * @description - Represents TextInput Component
 * @returns {JSX} - return DOM for Text Input
 */
export default function AppTextInput(props){
    return (
        <TextInput  {...props} style={[styles.text,props.style]}
        />
    )
}

const styles = StyleSheet.create({
    text:{
        margin: 20,
        width: 250,
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 4,
        padding:5,
        fontSize:14
    }
});