import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    decks:{
        byId: {},
        allIds: []
    }
}

function deckReducer(state= initialState, action){
    switch(action.type){
        case ActionTypes.CREATE_DECK:
            return {
                ...state,
                decks:{
                    byId:{...state.decks.byId,
                        [action.title]:{
                            title: action.title
                        }
                    },
                    allIds:[...state.decks.allIds, action.title]
                }
            }
        default:
            return state;
    }
}

export default deckReducer;