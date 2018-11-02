import React, {Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {

        const { email, password } = this.state;
        
        this.setState({
            error: '',
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onCreateAccountSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail() {
        this.setState({
            password: '',
            error: 'Falha ao se autenticar.',
            loading: false
        });
    }

    onCreateAccountSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });

        alert('Usuário criado com sucesso!');
    }

    renderButton() {

        if (this.state.loading) {
            return <Spinner size={'small'} />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>Entrar</Button>
        );
    }

    render() {

        return(
            <Card>
                <CardSection>
                    <Input 
                        label={'Email'}
                        placeholder={'user@email.com'}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label={'Senha'}
                        placeholder={'****'}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

export default LoginForm;