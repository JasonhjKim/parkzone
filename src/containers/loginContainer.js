import { connect } from 'react-redux';
import { loginUser } from '../actions/actions';
import Login from '../screens/login';

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated, 
    error: state.auth.error
})

const actionCreators = {
    loginUser
}

export default connect(mapStateToProps, actionCreators)(Login)
