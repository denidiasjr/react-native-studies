import {
    POINT_PRESSED
} from '../actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case POINT_PRESSED:
            let currentValue = !!state[action.payload];
            return { ...state, [action.payload]: !currentValue};
        default:
            return state;
    }

}