import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import { getDecks } from '../utils/api';
import { connect } from 'react-redux'

class DeckListView extends Component{

    componentDidMount(){
        getDecks()
            .then(data => {
                console.log(data);
            })
    }

    render(){
        return(
            <View>

            </View>
        )
    }
}

export default connect(mapStateToProps)(DeckListView);