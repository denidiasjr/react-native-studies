import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    insertLetter,
    backspaceLetter
} from '../actions';

import { View } from 'react-native';
import Button from './Button';

class BrailleActions extends Component {

    onPressInsert() {

        let {
            letter,
            insertLetter
        } = this.props;

        insertLetter(letter);
    }
    
    render() {

        return (
            <View style={styles.boxStyle}>
                <Button color="#e06868" onPress={() => backspaceLetter()}>Backspace</Button>
                <Button color="#56b353" onPress={this.onPressInsert.bind(this)}>Insert</Button>
            </View>
        );
    }
}

const styles = {
    boxStyle: {
        flex: 2,
        flexDirection: 'row'
    }
}

const mapStateToProps = (state) => {

    // Get state variables
    const alphabet = state.alphabet;
    const braille = state.braille;

    // Initialize current combination and letter
    let currentCombination = '';
    let currentLetter = '';

    // Get current combination
    for (let i = 0; i < braille.length; i++) {
        currentCombination += braille[i] ? i : '';
    }

    // Get letter from combination
    if (currentCombination) {

        for (let i = 0; i < alphabet.length; i++) {
            
            if (alphabet[i].combination == currentCombination) {
                currentLetter = alphabet[i].letter;
                break;
            }
        }
    }
    
    return { 
        letter: currentLetter
    };
}

export default connect(mapStateToProps, { insertLetter, backspaceLetter })(BrailleActions);