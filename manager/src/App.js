import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import LoginForm from './components/LoginForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyBOpG0iArlwlc0unFfBA4mV4SW7kUvf5GU",
            authDomain: "manager-8f47d.firebaseapp.com",
            databaseURL: "https://manager-8f47d.firebaseio.com",
            projectId: "manager-8f47d",
            storageBucket: "manager-8f47d.appspot.com",
            messagingSenderId: "949412499601"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;