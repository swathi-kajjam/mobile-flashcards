import * as actionTypes from './actionTypes';

export const addingCardToDeck = (title, card) =>({
    type: actionTypes.ADD_CARD_TO_DECK,
    payload:{
        title,
        card
    }
})