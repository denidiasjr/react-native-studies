import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder }) => {
    
    return (
        <View>
            <Text>{placeholder}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{height: 20, width: 100}}
            />
        </View>
    );
}

const styles = {
    containerStyle: {},
    labelStyle: {},
    inputStyle: {}
}

export default Input;