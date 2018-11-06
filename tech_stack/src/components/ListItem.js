import React, { Component } from 'react';
import { Text } from 'react-native';

class ListItem extends Component {

    render() {
        
        let {
            library
        } = this.props;

        return (
            <Text>{library.title}</Text>
        );
    }
}

export default ListItem;