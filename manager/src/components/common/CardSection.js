import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    
    return (
        <View style={[styles.containerStyles, props.style]}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyles: {
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        bordercolor: '#ddd',
        borderBottomWidth: 0.3,
        position: 'relative',
        minHeight: 50
    }
}

export {CardSection};