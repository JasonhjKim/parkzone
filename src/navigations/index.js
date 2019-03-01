import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Landing from '../screens/landing'
import Login from '../screens/login'
import Example from '../screens/example'
import Register from '../containers/registerContainer';


const StackNavigator = createStackNavigator({
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
