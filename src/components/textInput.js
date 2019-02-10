import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { primary, lightGrey, darkGrey, red } from '../commons/color';
import FullView from './fullView';

export default class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputState: 'default',
            text: '',
        }
    }

    render() {
        const { title } = this.props;
        const { lineColor } = textInputStates[this.state.inputState];
        return(
            <TextInputContainer>
                <StyledText>{title}</StyledText>
                <StyledTextInput lineColor={ lineColor } 
                onFocus={ () => this.setState({ inputState: 'focused' }) }
                onBlur={ () => this.setState({ inputState: 'default' }) } 
                onChangeText={ (text) => this.setState({ text }) }/>
            </TextInputContainer>
        )
    }
}

const TextInputContainer = styled(FullView)`
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    height: 55px;
`

const StyledTextInput = styled.TextInput`
    width: 305px;
    height: 40px;
    border-bottom-width: 2;
    border-bottom-color: ${props => props.lineColor};
    font: 16px roboto;
    color: ${darkGrey};
`;

const StyledText = styled.Text`
    font: 16px roboto;
    color: ${primary};
`;

const textInputStates = {
    default: {
        lineColor: lightGrey,
    },
    focused: {
        lineColor: primary,
    },
    error: {
        lineColor: red,
    }
}

TextInput.defaultProps = {
    title: "TextInput"
}