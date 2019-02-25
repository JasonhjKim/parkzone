import { createAppContainer, createStackNavigator } from 'react-navigation';
import Landing from '../screens/landing';
import Login from '../containers/loginContainer';
import Register from '../screens/register';
import Example from '../screens/example';

const StackNavigator = createStackNavigator({
    Landing: Landing,
    Login: Login,
    Register: Register,
    Example: Example
})

export default createAppContainer(StackNavigator);
