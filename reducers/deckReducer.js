import * as ActionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';

function addDeckEntry(state, title){
    return {
        ...state,
        [title] : {
            title,
            questions: []
        }
    };
}

function addCardToDeck(state, title, card){
    const deck = state[title];
    const questions = deck.questions || [];

    return {
        ...state,
        [title]:{
            ...deck,
            questions: [...questions, card.id]
        }
    }
}


function decksById(state = {}, action){
    switch(action.type){
        case ActionTypes.CREATE_DECK:
            return addDeckEntry(state, action.title)
        case ActionTypes.RECEIVE_DECKS:
            const {decks} = action;
            state = decks;
            return state;
        case ActionTypes.ADD_CARD_TO_DECK:
            return addCardToDeck(state, action.title, action.card)
        default:
            return state;
    }
}


function allDecks(state=[], action){
    switch(action.type) {
        case ActionTypes.CREATE_DECK:
           return [...state, action.title]
        case ActionTypes.RECEIVE_DECKS:
            const {decks} = action;
            Object.keys(decks).forEach(key => {
                 state.push(key)
            })
            return state;
        default:
            return state;
    }
}

const deckReducer = combineReducers({
    byId: decksById,
    allIds: allDecks
});

export default deckReducer;