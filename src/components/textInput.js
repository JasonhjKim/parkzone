import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { primary, lightGrey, darkGrey, red } from '../commons/color';
import FullView from './fullView';

export default class TextInput extends Component {
    render() {
        const { theme, title } = this.props
        const { lineColor } = textInputStyles[theme]
        return(
            <TextInputContainer>
                <StyledText>{title}</StyledText>
                <StyledTextInput lineColor={ lineColor } />
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
    height: 35px;
    border-bottom-width: 2;
    border-bottom-color: ${props => props.lineColor};
    font: 16px roboto;
    color: ${darkGrey};
`;

const StyledText = styled.Text`
    font: 16px roboto;
    color: ${primary};
`;

const textInputStyles = {
    default: {
        lineColor: lightGrey,
    },
    focused: {
        lineColor: primary,
    },
    error: {
        color: red,
    }
}

TextInput.defaultProps = {
    title: "TextInput",
    theme: "default"
}