import { StyleSheet, Text } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    error:{
        color:'red',
        fontWeight:'bold'
    }
})

export default function({msg='', style={}}){
    return (
        <Text style={[styles.error, style]}>{msg}</Text>
    )
}