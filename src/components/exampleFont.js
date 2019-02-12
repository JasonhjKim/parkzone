import { H1, H2, H3, H4, H5, H6, T, P} from '../commons/fontSize';
import React, { Component} from 'react';
import { View } from 'react-native';

export default class ExampleFont extends Component {
    render() {
        return(
            <View>
                <H1>Example H1 Text</H1>
                <H2>Example H2 Text</H2>
                <H3>Example H3 Text</H3>
                <H4>Example H4 Text</H4>
                <H5>Example H5 Text</H5>
                <H6>Example H6 Text</H6>
                <T>Example T Text</T>
                <P>Example P Text</P>
            </View>
        )
    }
}