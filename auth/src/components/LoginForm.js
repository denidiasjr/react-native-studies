import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {

    state = {email: ''};

    render() {

        return(
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button>Entrar</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;