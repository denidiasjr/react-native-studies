import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        
        let {
            library,
            expanded
        } = this.props;

        if (expanded) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        
        let {
            library,
            selectLibrary,
            expanded
        } = this.props;

        let {
            titleStyle
        } = styles;

        return (
            <TouchableWithoutFeedback
                onPress={() => selectLibrary(library.id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{library.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);