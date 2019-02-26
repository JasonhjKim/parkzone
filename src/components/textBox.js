import React, { Component } from 'react';
import styled from 'styled-components/native';

import { primary, lightGrey, darkGrey, red } from '../commons/color';
import { T, P, TextInput } from '../commons/fontSize';

export default class TextBox extends Component {
    state = {
        inputState: 'default'
    }

    render() {
        const { title, value, type, onChangeText, error, style } = this.props;
        const { lineColor } = error ? textBoxStates.error : textBoxStates[this.state.inputState];
        return (
            <TextBoxContainer style={style}>
                <T>{title}</T>
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
                <ErrorText>{error}</ErrorText>
            </TextBoxContainer>
        )
    }

    focus = () => {
        this.setState({ inputState: 'focused' })
    }

    blur = () => {
        this.setState({ inputState: 'default' })
    }
}

const TextBoxContainer = styled.View`
    flex-direction: column;
    align-items: stretch;
`;

const StyledTextInput = styled(TextInput)`
    height: 40px;
    border-bottom-width: 2;
    border-bottom-color: ${props => props.lineColor};
    color: ${darkGrey};
`;

const ErrorText = styled(P)`
    margin-top: 2%;
    color: ${red};
`;

const textBoxStates = {
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

TextBox.defaultProps = {
    title: "TextInput"
}