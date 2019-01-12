import React, { Component } from 'react';
import {
    TouchableOpacity, 
    Text
 } from 'react-native';
import { CardSection } from './common';
import { Actions } from  'react-native-router-flux';

class ListItem extends Component {

    onRowPress() {
        Actions.employeeEdit({ employee:this.props.employee });
    }

    render() {
        const { 
            name 
        } = this.props.employee;

        return (
            <TouchableOpacity
                onPress={this.onRowPress.bind(this)}
            >
                <CardSection>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                </CardSection>
            </TouchableOpacity>
        );
    }
}

const styles = {
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;