import { AsyncStorage } from 'react-native';

import { AUTH_ERROR, AUTH_USER, UNAUTH_USER } from '../actions/constants';

export default auth = (state = {}, action) => {
    switch (action.type) {
        case AUTH_USER:
            AsyncStorage.setItem("token", action.token)
            return { ...state, error: undefined, authenticated: true }
        case UNAUTH_USER:
            return { ...state, authenticated: false }
        case AUTH_ERROR:
            return { ...state, error: action.message, authenticated: false }
        default: 
            return state
    }
}