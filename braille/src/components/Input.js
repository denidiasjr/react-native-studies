import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
} from 'react-native';
import * as actions from '../actions';

class Input extends Component {

    render() {

        return (
            <View style={styles.boxStyle}>
                <Text style={styles.textStyle}>Abracadabra!</Text>
            </View>
        );
    }
}

const styles = {
    boxStyle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 0.5
    },
    textStyle: {
        color: '#000',
        marginLeft: 10,
        fontSize: 18
    }
}

export default Input;
