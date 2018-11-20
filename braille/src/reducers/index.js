import { combineReducers } from 'redux';
import TextReducer from './TextReducer';
import BrailleReducer from './BrailleReducer';

export default combineReducers({
    text: TextReducer,
    braille: BrailleReducer
});