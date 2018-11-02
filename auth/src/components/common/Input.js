import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
    
    let {
        value,
        onChangeText,
        label,
        placeholder,
        secureTextEntry
    } = props;

    let {
        containerStyle,
        labelStyle,
        inputStyle,
    } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        // backgroundColor: '#baA',
        flex: 1
    },
    inputStyle: {
        color: '#000',
        // backgroundColor: '#abb',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2,
        height: 40,
        width: 100
    }
}

export { Input };