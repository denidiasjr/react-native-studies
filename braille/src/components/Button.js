import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends Component {

    render() {
        
        let {
            children,
            color,
            onPress
        } = this.props;

        let colorButton = {
            backgroundColor: color ? color : '#acacac'
        }

        return (
            <TouchableOpacity
                style={[styles.buttonStyle, colorButton]}
                onPress={onPress}
            >
                <Text style={styles.textStyle}>{children}</Text>
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