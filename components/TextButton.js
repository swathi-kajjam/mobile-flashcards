import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { purple, white } from "../utils/colors";

const styles = StyleSheet.create({
    text:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    iosBtn:{
        backgroundColor:purple,
        borderRadius:7,
        height:45,
        width: 250,
        padding:10,
        paddingTop:12,
        margin:10,
        marginLeft:30,
        marginRight:30
    }
})

export default function TextButton({onPress, children, textStyle = {}, btnStyle={}}){
    return (
        <TouchableOpacity style={[Platform.OS==='ios'? styles.iosBtn : styles.androidBtn, btnStyle]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}> {children} </Text>
        </TouchableOpacity>
    )
}

