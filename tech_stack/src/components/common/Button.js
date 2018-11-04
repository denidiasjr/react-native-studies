import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = (props) => {
    
    const {
        onPress,
        children
    } = props;

    const {
        buttonStyle,
        textStyle
    } = styles;

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={buttonStyle}
        >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        height: 40,
        maxHeight: 40,
        flex: 1,
        backgroundColor: '#205c74',
        alignSelf: 'stretch',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export {Button};