import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Landing from '../screens/landing'
import Login from '../screens/login'
import Register from '../screens/register'
import Example from '../screens/example'
import MapScreen from '../screens/mapscreen'


const StackNavigator = createStackNavigator({
    MapScreen: {
        screen: MapScreen
    }, 
    Landing: {
        screen: Landing
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    Example: {
        screen: Example
    }
})

export default createAppContainer(StackNavigator);
