import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { gray } from "../utils/colors";

const styles = StyleSheet.create({
    text:{
        margin: 20,
        height: 40,
        width: 250,
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 4
    }
})

export default function AppTextInput({value='', onChangeText, style=''}){
    return (
        <TextInput style={[styles.text,style]} value={value} onChangeText={onChangeText}/>
    )
}