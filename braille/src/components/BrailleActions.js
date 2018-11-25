import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    insertLetter,
    backspaceLetter
} from '../actions';

import { View } from 'react-native';
import Button from './Button';

class BrailleActions extends Component {

    onPressBackspace() {
        
    }

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
                <Button color="#e06868" onPress={this.onPressBackspace.bind(this)}>Backspace</Button>
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

const mapStateToProps = (state, ownProps) => {

    console.log(state);

    const alphabet = state.alphabet;
    const braille = state.braille;
    let currentCombination = '';
    let currentLetter = '';

    for (let i = 0; i < braille.length; i++) {
        currentCombination += braille[i] ? i : '';
    }

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