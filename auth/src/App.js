import React, {Component} from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDZDD2Sw4NKtwaJp6uy36DIOOydrGNohRQ",
            authDomain: "auth-586c7.firebaseapp.com",
            databaseURL: "https://auth-586c7.firebaseio.com",
            projectId: "auth-586c7",
            storageBucket: "auth-586c7.appspot.com",
            messagingSenderId: "841360598424"
        });
    }

    render() {
        return (
            <View>
                <Header title="Authentication" />
                <LoginForm />
            </View>
        );
    }
    
};

export default App;