import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from "axios";

class SignUpForm extends Component {

    state = { phone: ''};

    handleSubmit = async () => {
        const ROOT_URL = 'https://us-central1-one-time-password-rn-f4271.cloudfunctions.net';
        const createUserURL = `${ROOT_URL}/createUser`;
        const requesOneTimePasswordURL = `${ROOT_URL}/requestOneTimePassword`;

        try{
            // post to create user. only after that is resolved, request to one time password url.
            await axios.post(createUserURL, {phone: this.state.phone});
            await axios.post(requesOneTimePasswordURL, {phone: this.state.phone});

        } catch (e) {
            console.log(e);
        }
    };

    render(){
        return (
            <View>
                <Text h3>Sign Up</Text>
                <View style={{ marginBottom: 10}}>
                    <FormLabel>Enter Phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone=> this.setState({ phone })}
                    />
                    <Button
                        title="Submit"
                        onPress={this.handleSubmit}
                    />
                </View>
            </View>
        );
    }
}

export default SignUpForm;