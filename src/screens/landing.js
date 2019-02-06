import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Landing extends Component {
    render() {
        return(
            <View>
                <Text>This is the landing screen</Text>
                <Button title="To Login" onPress={ () => this.props.navigation.navigate("Login")}></Button>
            </View>
        )
    }
}