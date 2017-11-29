import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';

function addDeckEntry(state, payload){
    const {title} = payload;

    return {
        ...state,
        [title] : {
            title,
            questions: []
        }
    };
}

function addCardToDeck(state, payload){
    const {title, card} = payload;

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
    const {payload} = action;

    switch(action.type){
        case actionTypes.CREATE_DECK:
            return addDeckEntry(state, payload)
        case actionTypes.RECEIVE_DECKS:
            const {decks} = payload;
            state = decks;
            return state;
        case actionTypes.ADD_CARD_TO_DECK:
            return addCardToDeck(state, payload)
        default:
            return state;
    }
}

function allDecks(state=[], action){
    const {payload} = action;

    switch(action.type) {
        case actionTypes.CREATE_DECK:
           const {title} = payload;

           return [...state, title]
        case actionTypes.RECEIVE_DECKS:
            const {decks} = payload;

            Object.keys(decks).forEach(key => {
                 state.push(key)
            });
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