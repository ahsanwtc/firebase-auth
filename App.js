import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import config from './config.json';

export default class App extends React.Component {
    componentDidMount() {
          firebase.initializeApp(config);
    }

    render() {
        return (
            <View style={styles.container}>
                <SignUpForm />
                <SignInForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
