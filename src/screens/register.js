import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styled from 'styled-components';

export default class Register extends Component {
    render() {
        return(
            <View>
                <Text>Welcome to Register Screen niggas</Text>
                <TextInput placeholder="Full Name" textContentType="name"/>
                <TextInput placeholder="Email" textContentType="emailAddress"/>
                <TextInput placeholder="Password" textContentType="password"/>
                <TextInput placeholder="Confirm Password" textContentType="password"/>
                <Button title="To Landing" onPress={ () => this.props.navigation.navigate("Landing")}></Button>
            </View>
        )
    }
}

const FullView = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`