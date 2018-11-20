import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    TouchableOpacity
} from 'react-native';
import * as actions from '../actions';

class Point extends Component {

    onPress() {
        console.log('It\'s pressed!');
    }

    render() {

        console.log(this.props);

        return (
            <TouchableOpacity
                onPress={this.onPress.bind(this)}
                style={styles.pointStyle}
            >
            </TouchableOpacity>
        );
    }
}

const styles = {
    pointStyle: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1
    }, 
    pressedStyle: {
        backgroundColor: 'steelblue',
    },
    unpressedStyle: {
        backgroundColor: 'red',
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        isPressed: !!state.braille[ownProps.id]        
    }
}

export default connect(mapStateToProps, actions)(Point);

