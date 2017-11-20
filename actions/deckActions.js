import * as ActionTypes from './actionTypes';

export const createDeck = (title) => ({
    type: ActionTypes.CREATE_DECK,
    title
});

export const receiveDecks = (decks) => ({
    type: ActionTypes.RECEIVE_DECKS,
    decks
})
