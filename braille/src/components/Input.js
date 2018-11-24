import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
} from 'react-native';
import {insertLetter} from '../actions';

class Input extends Component {

    render() {

        let {
            text
        } = this.props;

        let noTextStyle = {
            color: text ? '#000' : '#acacac'
        }

        text = text ? text : 'Seu texto aqui';

        return (
            <View style={styles.boxStyle}>
                <Text style={[styles.textStyle, noTextStyle]}>{text}</Text>
            </View>
        );
    }
}

const styles = {
    boxStyle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 0.5
    },
    textStyle: {
        marginLeft: 10,
        fontSize: 18
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        text: state.text
    }
}

export default connect(mapStateToProps, { insertLetter })(Input);
