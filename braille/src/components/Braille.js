import React, { Component } from 'react';
import { View } from 'react-native';
import Point from './Point';

class Braille extends Component {

    render() {
        return (
            <View style={styles.brailleStyle}>
                <View style={styles.columnStyle}>
                    <Point number="1" />
                    <Point number="4" />
                </View>
                <View style={styles.columnStyle}>
                    <Point number="2" />
                    <Point number="5" />
                </View>
                <View style={styles.columnStyle}>
                    <Point number="3" />
                    <Point number="6" />
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