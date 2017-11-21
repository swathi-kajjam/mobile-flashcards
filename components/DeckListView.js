import React, { Component } from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions/deckActions';
import { connect } from 'react-redux';
import Deck from './Deck';
import { formatData } from '../utils/helpers';

/**
 * @description - Represents deckList component
 * @returns {HTML} - return DOM for displaying all the decks
 */
class DeckListView extends Component{
    state = {
        decks: []
    }

    componentDidMount(){
       const {dispatch} = this.props;
       getDecks()
           .then((entries) => dispatch(receiveDecks(entries)))
    }

    onPress = (title) => {
        this.props.navigation.navigate(
            'IndividualDeckView',
            {title}
        )
    }

    renderItem = ({item}) =>{
        return <Deck {...item} key={item.title} onPress={this.onPress} />
    }

    render(){
        const {decks} = this.props;
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

const mapStateToProps = (state) => {
    return {
        decks: formatData(state.deckReducer.byId)
    }
}
export default connect(mapStateToProps)(DeckListView);