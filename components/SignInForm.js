import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {FormLabel, FormInput, Button, Badge} from 'react-native-elements';
import axios from "axios";

class SignInForm extends Component {

    state = {
        phone: '',
        code: '',
        error: ''
    };

    handleSubmit = async () => {
        const ROOT_URL = 'https://us-central1-one-time-password-rn-f4271.cloudfunctions.net';
        const verifyUserURL = `${ROOT_URL}/verifyOneTimePassword`;

        try{
            // post to create user. only after that is resolved, request to one time password url.
            let { data } = await axios.post(verifyUserURL, {
                phone: this.state.phone,
                code: this.state.code
            });
            firebase.auth().signInWithCustomToken(data.token);

        } catch (e) {
            this.setState({error: 'Phone number or code was invalid'});
        }
    };

    render(){
        return (
            <View>
                <Text h3>Sign In</Text>
                <View style={{ marginBottom: 10}}>
                    <FormLabel>Enter Phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone=> this.setState({ phone })}
                    />
                </View>
                <View style={{ marginBottom: 10}}>
                    <FormLabel>Enter One Time Password Code number</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code=> this.setState({ code })}
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}

export default SignInForm;