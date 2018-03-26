import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, Button, FormInput } from 'react-native-elements';
import axios from 'axios';

const ROOT_URI = 'https://us-central1-one-time-passward-6ae92.cloudfunctions.net';

class SignUpForm extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = { phone: '' };
    }
    */
    state = { phone: '' };

    // declaring an arrow function instead of a vanila function doesn't require bind statement
    handleSubmit = async () => {
        const { phone } = this.state;
        try {
            await axios.post(`${ROOT_URI}/createUser`, { phone });
            await axios.post(`${ROOT_URI}/requestOneTimePassword`, { phone });    
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
                
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}

export default SignUpForm;