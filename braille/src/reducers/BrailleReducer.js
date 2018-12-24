import {
    POINT_PRESSED,
    CLEAR_BRAILLE
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case POINT_PRESSED:
            let currentValue = !!state[action.payload];
            let newState = state.slice(0);
            newState[action.payload] = !currentValue;
            return newState;
        case CLEAR_BRAILLE:
            return INITIAL_STATE;
        default:
            return state;
    }

}