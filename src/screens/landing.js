import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { H1 } from '../commons/fontSize';

export default class Landing extends Component {
    render() {
        return(
            <View>
                <Text>This is the landing screen</Text>
                <H1>Some shit</H1>
                <Button title="To Login" onPress={ () => this.props.navigation.navigate("Login")}></Button>
            </View>
        )
    }
}