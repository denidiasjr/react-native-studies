import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
    View,
    Text
} from 'react-native';
import { 
    Card,
    CardSection,
    Input,
    Button,
    Spinner
} from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onPress() {

        let {
            email,
            password,
            loginUser
        } = this.props;

        loginUser({email, password})
    }

    renderError() {

        if (this.props.error) {
            return (
                <View style={styles.errorBoxStyle}>
                    <Text style={styles.errorMessageStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton() {

        if (this.props.loading) {
            return (
                <Spinner size="large"/>
            );
        }

        return (
            <Button
                onPress={this.onPress.bind(this)}
            >
                Entrar
            </Button>
        );
    }

    render() {

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="***"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorBoxStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    errorMessageStyle: {
        fontSize: 18,
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
} 

export default connect(mapStateToProps, actions)(LoginForm);