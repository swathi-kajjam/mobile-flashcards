import * as ActionTypes from './actionTypes';

export const createDeck = (title) => ({
    type: ActionTypes.CREATE_DECK,
    title
});