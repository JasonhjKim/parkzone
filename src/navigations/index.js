import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Landing from '../screens/landing'
import Login from '../screens/login'
import Register from '../screens/register'


const StackNavigator = createStackNavigator({
    Landing: {
        screen: Landing
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    }
})

export default createAppContainer(StackNavigator);
