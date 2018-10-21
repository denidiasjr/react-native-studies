import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#205c74',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    title: {
        color: '#fff',
        fontSize: 20
    }
});

export default Header;