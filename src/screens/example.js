import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Fonts from '../components/exampleFont';

export default class Example extends Component {
    render() {
        return(
            <View>
                <Fonts/>
            </View>
        )
    }
}