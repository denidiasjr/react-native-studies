import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Header, AlbumList } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        // firebase.initializeApp({
        //     apiKey: "AIzaSyDZDD2Sw4NKtwaJp6uy36DIOOydrGNohRQ",
        //     authDomain: "auth-586c7.firebaseapp.com",
        //     databaseURL: "https://auth-586c7.firebaseio.com",
        //     projectId: "auth-586c7",
        //     storageBucket: "auth-586c7.appspot.com",
        //     messagingSenderId: "841360598424"
        // });
    }

    render() {
        return (
            <View>
                <Header title="Authentication" />
            </View>
        );
    }
    
};

export default App;