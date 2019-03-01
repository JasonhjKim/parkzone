import { connect } from 'react-redux';
import { registerUser } from '../actions/actions';
import Register from '../screens/register';

// const mapStateToProps = (state) => {
//     const { authenticated, error } = state
//     return { authenticated, error }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (payload) => {
            dispatch(registerUser(payload))
        } 
    }
}

export default connect(null, mapDispatchToProps) (Register)