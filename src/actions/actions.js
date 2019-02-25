import axios from 'axios';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './constants';
import BASE_URL from '../commons/secret';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
})

const authUser = (data) => {
    return {
        type: AUTH_USER,
        token: data.token,
        message: data.message
    }
}

const authError = (data) => {
    return {
        type: AUTH_ERROR,
        message: data.message
    }
}

export const loginUser = (payload) => {
    return (dispatch) => instance.post('/login', payload)
        .then(response => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            if (response.data.auth) {
                dispatch(authUser(response.data))
            } else {
                dispatch(authError(response.data))
            }
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                dispatch(authError(error.response.data))
            }
        })
}

export const logoutUser = () => {
    AsyncStorage.removeItem('token')
    return (dispatch) => dispatch({ type: UNAUTH_USER })
}