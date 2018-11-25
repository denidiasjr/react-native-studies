import {
    INSERT_LETTER,
    BACKSPACE_LETTER
} from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INSERT_LETTER:
            return state + action.payload;
        case BACKSPACE_LETTER:
            return state.length > 0 ? state.substr(0, state.length - 1) : '';
        default:
            return state;
    }
}