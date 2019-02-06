/**
 * Three different types of components
 * Functional (stateful) => containers => contains all the logic (e.g grabbing state from a store) 
 * Presentatioanl (stateless) => No state => inherit all states as props from parent container or component
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';


/**
 * Two different ways of creating components;
 * class component
 * regular component a.k.a component
 */

export default class exampleComponent extends Component {
    render() {
        // have access to props passed down from parent
        const { something, anything, everything } = this.props
        return(
            <View>
                <Text>Class Component</Text>
            </View>
        )
    }
}

const exampleComponent = (props) => (
    <View>
        <Text>Component</Text>
    </View>
)