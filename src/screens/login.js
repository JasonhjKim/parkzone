import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends Component {
    render() {
        return(
            <View>
                <Text>This is the login screen</Text>
                <Button title="To Register" onPress={ () => this.props.navigation.navigate("Register")}></Button>
            </View>
        )
    }
}