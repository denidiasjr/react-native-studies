import {
    POINT_PRESSED
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case POINT_PRESSED:
            let currentValue = !!state[action.payload];
            let newState = state.slice(0);
            newState[action.payload] = !currentValue;
            return newState;
        default:
            return state;
    }

}