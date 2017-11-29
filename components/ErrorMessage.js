import { StyleSheet, Text } from 'react-native';
import React from 'react';

/**
 * @description - Represents Error message Component
 * @returns {JSX} - return DOM for Error Message
 */
export default function({msg='', style={}}){
    return (
        <Text style={[styles.error, style]}>{msg}</Text>
    )
}

const styles = StyleSheet.create({
    error:{
        color:'red',
        fontWeight:'bold'
    }
})
