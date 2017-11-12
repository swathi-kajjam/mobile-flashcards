import React, { Component } from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { getDecks } from '../utils/api';
import { connect } from 'react-redux';
import Deck from './Deck';

class DeckListView extends Component{
    state = {
        decks: []
    }

    componentDidMount(){
       getDecks()
           .then(decks => this.setState({decks}))
    }

    onPress = (title) => {
        console.log('pressed'+ title)
        this.props.navigation.navigate(
            'IndividualDeckView',
            {title}
        )
    }

    renderItem = ({item}) =>{
        return <Deck {...item} onPress={this.onPress} />
    }

    render(){
        const {decks} = this.state;
        return(
            <View style={styles.container}>
                <FlatList
                    data={decks}
                    keyExtractor={item=> item.title}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default connect()(DeckListView);