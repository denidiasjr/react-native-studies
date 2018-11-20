import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { View } from 'react-native';
import Point from './Point';

class Braille extends Component {

    render() {
        return (
            <View style={styles.brailleStyle}>
                <View style={styles.columnStyle}>
                    <Point id="p1" />
                    <Point id="p2" />
                </View>
                <View style={styles.columnStyle}>
                    <Point id="p3" />
                    <Point id="p4" />
                </View>
                <View style={styles.columnStyle}>
                    <Point id="p5" />
                    <Point id="p6" />
                </View>
            </View>
        );
    }
}

const styles = {
    brailleStyle: {
        flex: 15
    },
    columnStyle: {
        flex: 1,
        flexDirection: 'row'
    }
}

export default Braille;