import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styled from 'styled-components';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapScreen extends Component {
    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: 42.882004,
                    longitude: 74.582748,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
            />
        )
    }
}

const FullView = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`