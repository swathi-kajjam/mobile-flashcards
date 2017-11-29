import * as actionTypes from './actionTypes';

export const createDeck = (title) => ({
    type: actionTypes.CREATE_DECK,
    payload:{
        title
    }
});

export const receiveDecks = (decks) => ({
    type: actionTypes.RECEIVE_DECKS,
    payload:{
        decks
    }
})
