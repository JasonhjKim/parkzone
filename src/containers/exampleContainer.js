/**
 * This is an example of container (stateful)
 * As you can see from below, container should not contain any visual (presentational) logic
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ExampleComponent from '../components/exampleComponent';

class ExampleContainer extends Component {
    render() {
        //return by your mapStateToProps function
        const { anything, something, everything } = this.props.things
        // Passing all my state as props to my (stateless) component for presentation
        return <ExampleComponent {...this.props.things}/>
    }
}

function mapStateToProps(state) {
    // This make it so that object from your global state is available to you via props
    // Since I named my prop things, I can acces by => this.props.things
    return {
        things: state.things
    }
}


export default connect(actions, mapStateToProps)(ExampleContainer)
