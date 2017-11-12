import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    questions:{
        byId: {},
        allIds: []
    }
}

function questionReducer(state= initialState, action){
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

export default questionReducer;