import { combineReducers } from 'redux';
import TextReducer from './TextReducer';
import BrailleReducer from './BrailleReducer';
import AlphabetReducer from './AlphabetReducer';

export default combineReducers({
    text: TextReducer,
    braille: BrailleReducer,
    alphabet: AlphabetReducer
});