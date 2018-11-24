import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends Component {

    render() {

        let {
            text,
            color
        } = this.props;

        let colorButton = {
            backgroundColor: color ? color : '#acacac'
        }

        return (
            <TouchableOpacity
                style={[styles.buttonStyle, colorButton]}
            >
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#fff',
        fontSize: 20
    }
}

export default Button;