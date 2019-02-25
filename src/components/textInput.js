import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { primary, lightGrey, darkGrey, red } from '../commons/color';
import FullView from './fullView';

export default class TextInput extends Component {
    state = {
        inputState: 'default'
    }

    render() {
        const { title, value, type, onChangeText, error } = this.props;
        const { lineColor } = error ? textInputStates.error : textInputStates[this.state.inputState];
        return (
            <TextInputContainer>
                <StyledText>{title}</StyledText>
                <StyledTextInput
                    value={value}
                    autoCapitalize='none'
                    contentType={type}
                    secureTextEntry={type == 'password'}
                    autoCorrect={false}
                    lineColor={lineColor}
                    onFocus={this.focus}
                    onBlur={this.blur}
                    onChangeText={onChangeText} />
                {error && <ErrorText>{error}</ErrorText>}
            </TextInputContainer>
        )
    }

    focus = () => {
        this.setState({ inputState: 'focused' })
    }

    blur = () => {
        this.setState({ inputState: 'default' })
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

const ErrorText = styled.Text`
    margin-top: 3px;
    font: 12px roboto;
    color: ${red};
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