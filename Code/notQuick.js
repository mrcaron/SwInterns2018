// This file will require many npm installs
// It can and should be run through expo for functionality
// This is a very simple implementation of a user interface
// Many aspects of this file will not function without more support

// This is a mobile application for checking if an input text is a palindrome

import 'expo';
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ''
    };
  }

  isPalindrome(line) {
    let regex = /[^A-Za-z0-9]/g; // Regex for non alpha-numeric characters

    // Modify line into a string of alpha-numeric characters
    let modLine = line.toLowerCase().replace(regex, ''); 

    // Reverses modified line 
    let revLine = modLine.split('').reverse().join('');

    return modLine === revLine;
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to check!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {isPalindrome(this.state.text) ? True : False}
        </Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('Project', () => Palindrome);
