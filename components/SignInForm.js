import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, Button, FormInput } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URI = 'https://us-central1-one-time-passward-6ae92.cloudfunctions.net';

class SignInForm extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = { phone: '' };
    }
    */
    state = { phone: '', code: '' };

    // declaring an arrow function instead of a vanila function doesn't require bind statement
    handleSubmit = async () => {
        const { phone, code } = this.state;
        try {
            let { data } = await axios.post(`${ROOT_URI}/verifyPassword`, { phone, code });
            firebase.auth().signInWithCustomToken(data.token);
        } catch (error) {
            console.log(error);
        }        
    }

    render() {
        return(
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput 
                        value={this.state.phone} onChangeText={phone => this.setState({ phone })}
                    />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput 
                        value={this.state.code} onChangeText={code => this.setState({ code })}
                    />
                </View>
                
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}

export default SignInForm;