import axios from 'axios';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './constants'

const instance = axios.create({
    baseURL: '159.65.69.12:3000',
    timeout: 1000,
})

const authUser = (status, data) => {
    return {
        type: AUTH_USER,
        status,
        payload: {
            _id: data._id,
            token: data.token,
        }
    }
}

const authError = (status, data) => {
    return {
        type: AUTH_ERROR,
        status, 
        payload: {
            err: data.err
        }
    }
}

export const loginUser = (payload) => {
    return (dispatch) => {
        instance.post('/login', payload)
        .then(response => { // If it was successful
            dispatch(authUser(response.status, response.data))
        })
        .catch(error => { // If it fails
            dispatch(authError(response.status, error.response))
        })
    }
}

export const logoutUser = () => {
    AsyncStorage.removeItem('token')
    return (dispatch) => dispatch({ type: UNAUTH_USER })
}