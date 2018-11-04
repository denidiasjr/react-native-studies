import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common/Button';
import { connect } from 'react-redux';

class LibraryList extends Component {

    render() {

        let {
            libraries
        } = this.props;
        
        return (
            <View style={styles.containerStyle}>
                <Button>Bora lá</Button>
            </View>
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