import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import {firebaseConfig} from "./config";
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount(){
      firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
