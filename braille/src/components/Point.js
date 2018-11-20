import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    TouchableOpacity
} from 'react-native';
import * as actions from '../actions';

class Point extends Component {

    render() {

        let {
            pointStyle,
            pressedStyle,
            unpressedStyle
        } = styles;

        let {
            isPressed,
            id,
            pointPressed
        } = this.props;

        let currentStyle = isPressed ? pressedStyle : unpressedStyle;
        
        return (
            <TouchableOpacity
                onPress={() => pointPressed(id)}
                style={[pointStyle, currentStyle]}
            >
            </TouchableOpacity>
        );
    }
}

const styles = {
    pointStyle: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5
    }, 
    pressedStyle: {
        backgroundColor: 'steelblue',
    },
    unpressedStyle: {
        backgroundColor: 'skyblue',
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        isPressed: !!state.braille[ownProps.id]        
    }
}

export default connect(mapStateToProps, actions)(Point);

