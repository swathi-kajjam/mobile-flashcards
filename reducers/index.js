import { combineReducers } from 'redux';
import deckReducer from './deckReducer';
import questionReducer from './questionReducer';

const index = combineReducers({
    deckReducer,
    questionReducer
});

export default index;