import * as ActionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';


function addQuestion(state, title, card){
    const { id } = card
    const question = {id:id, question:card.question, answer: card.answer}
    return {
        ...state,
        [id]:question
    }
}

const questionById = (state={}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_CARD_TO_DECK:
            return addQuestion(state, action.title, action.card)
        default:
            return state;
    }
}

const allQuestions = (state=[], action) => {
    switch(action.type){
        case ActionTypes.ADD_CARD_TO_DECK:
            return [...state, action.card.id];
        default:
            return state;
    }
}

const questionReducer = combineReducers({
    byId: questionById,
    allIds: allQuestions
});

export default questionReducer;