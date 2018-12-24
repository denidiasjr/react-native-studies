import {
    INSERT_LETTER,
    BACKSPACE_LETTER,
    POINT_PRESSED,
    CLEAR_BRAILLE
} from './types';

export const insertLetter = (letter) => {
    return {
        type: INSERT_LETTER,
        payload: letter
    }
}

export const backspaceLetter = () => {
    return {
        type: BACKSPACE_LETTER
    }
}


export const clearBraille = () => {
    return {
        type: CLEAR_BRAILLE
    }
}

export const pointPressed = (point) => {
    return {
        type: POINT_PRESSED,
        payload: point
    }
}
