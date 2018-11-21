import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import LoginForm from './components/LoginForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;