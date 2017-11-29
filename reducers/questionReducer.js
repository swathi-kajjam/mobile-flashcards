import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';


function addQuestion(state, payload){

    const {card} = payload;
    const {id, question, answer} = card;

    const newQuestion = {id, question, answer}

    return {
        ...state,
        [id]:newQuestion
    }
}

const questionById = (state={}, action) => {
    const {payload} = action;

    switch(action.type){
        case actionTypes.ADD_CARD_TO_DECK:
            return addQuestion(state, payload)
        default:
            return state;
    }
}

const allQuestions = (state=[], action) => {
    const {payload} = action;

    switch(action.type){
        case actionTypes.ADD_CARD_TO_DECK:
            const {card} = payload;

            return [...state, card.id];
        default:
            return state;
    }
}

const questionReducer = combineReducers({
    byId: questionById,
    allIds: allQuestions
});

export default questionReducer;