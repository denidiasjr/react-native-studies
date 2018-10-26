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
        justifyContent: 'flex-start',
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        bordercolor: '#ddd',
        position: 'relative'
    }
}

export default CardSection;