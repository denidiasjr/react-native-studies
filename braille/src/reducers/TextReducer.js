import {
    INSERT_LETTER,
    BACKSPACE_LETTER
} from 'react-native';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INSERT_LETTER:
            return INITIAL_STATE + action.payload;
        default:
            return state;
    }
}