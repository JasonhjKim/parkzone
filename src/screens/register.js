import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Register extends Component {
    render() {
        return(
            <View>
                <Text>This is the register screen</Text>
                <Button title="To Landing" onPress={ () => this.props.navigation.navigate("Landing")}></Button>
            </View>
        )
    }
}