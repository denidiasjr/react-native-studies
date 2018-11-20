import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Braille from './components/Braille';
import Input from './components/Input';

export default class App extends Component {
  
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{flex: 1}}>
                    <Input />
                    <Braille />
                </View>
            </Provider>
        );
    }
}
