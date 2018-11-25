import {
    INSERT_LETTER,
    BACKSPACE_LETTER
} from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INSERT_LETTER:
            return state + action.payload;
        default:
            return state;
    }
}