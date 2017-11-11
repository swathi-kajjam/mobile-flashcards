import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { purple, white } from "../utils/colors";

const styles = StyleSheet.create({
    btn:{
        padding: 10,
        backgroundColor: purple,
        color: white
    }
})

export default function TextButton({onPress, children, style = {}}){
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.btn,style]}> {children} </Text>
        </TouchableOpacity>
    )
}

