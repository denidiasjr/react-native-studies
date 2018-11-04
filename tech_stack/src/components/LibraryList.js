import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button } from './common/Button';
import { connect } from 'react-redux';

class LibraryList extends Component {

    renderItem(library) {

    }

    render() {

        let {
            libraries
        } = this.props;
        
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem={this.renderItem}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);

const styles = {
    containerStyle: {
        flex: 1,
        marginTop: 10
    }
}