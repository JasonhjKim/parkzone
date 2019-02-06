import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './constants'
import { AsyncStorage } from 'react-native';
import axios from 'axios';

/**
 * export const loginUser = function(dispatch){
 *  return function(dispatch) {}
 * }
 */

export const loginUser = ({ email, password }) => {
    return(dispatch) => {
        axios.post('someURL', { email, password})
            .then(res => { //If it was successful
                dispatch({
                    type: AUTH_USER,
                })
                AsyncStorage.setItem("token", res.data.token)
                //reroute to some different screen
            })
            .catch(err => { // If it fails
                dispatch(authError('Some error message'))
            })
    }
}

export const logoutUser = () => {
    AsyncStorage.removeItem("token")
    return (dispatch) => dispatch({ type: UNAUTH_USER })
}

function authError(err) {
    return {
        type: AUTH_ERROR,
        payload: err
    }
}