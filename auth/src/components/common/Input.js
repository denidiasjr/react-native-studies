import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ value, onChangeText, label, placeholder }) => {
    
    return (
        <View styles={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
            />
        </View>
    );
}

const styles = {
    containerStyle: {

    },
    labelStyle: {
        paddingRight: 10
    },
    inputStyle: {
        height: 50,
        alignSelf: 'flex-start',
        fontSize: 18
    }
}

export { Input };