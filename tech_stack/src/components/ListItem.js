import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillMount() {

        // Enable LayoutAnimation under Android
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        
        let {
            library,
            expanded
        } = this.props;

        let {
            descriptionStyle
        } = styles;

        if (expanded) {
            return (
                <Text style={descriptionStyle}>{library.description}</Text>
            );
        }
    }

    render() {
        
        let {
            library,
            selectLibrary,
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
    },
    descriptionStyle: {
        fontSize: 16,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        textAlign: 'justify'
    }
}

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);