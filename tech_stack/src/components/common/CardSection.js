import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    
    return (
        <View style={styles.containerStyles}>
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
        borderBottomWidth: 0.5,
        position: 'relative',
        minHeight: 70
    }
}

export {CardSection};