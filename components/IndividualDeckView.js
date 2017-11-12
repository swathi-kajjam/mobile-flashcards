import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

class IndividualDeckView extends Component{

    render(){
        return (
            <View style={{flex:1}}>
                <Text> Deck View {this.props.title}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state, {navigation}) => {
    const {title} = navigation.state.params;
    return{
        title
    }
}

export default connect(mapStateToProps)(IndividualDeckView)