import * as ActionTypes from './actionTypes';

export const addingCardToDeck = (title, card) =>({
    type: ActionTypes.ADD_CARD_TO_DECK,
    title,
    card
})