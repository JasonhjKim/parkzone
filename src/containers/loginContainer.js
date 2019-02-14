import { connect } from 'react-redux';

import { loginUser } from '../actions/actions';

import Login from '../screens/login';

const mapStateToProps = (state) => {
    const { authenticated, error } = state
    return { authenticated, error }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (payload) => {
            dispatch(loginUser(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
