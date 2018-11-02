import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Card, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        loggedIn: null,
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDZDD2Sw4NKtwaJp6uy36DIOOydrGNohRQ",
            authDomain: "auth-586c7.firebaseapp.com",
            databaseURL: "https://auth-586c7.firebaseio.com",
            projectId: "auth-586c7",
            storageBucket: "auth-586c7.appspot.com",
            messagingSenderId: "841360598424"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case false:
                return (
                    <LoginForm />
                );
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Sair</Button>
                        </CardSection>
                    </Card>
                );
            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner />
                        </CardSection>
                    </Card>
                );
        }
    }

    render() {
        return (
            <View>
                <Header title="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
    
};

export default App;