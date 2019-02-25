import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { primary, white, green, red, yellow } from '../commons/color';
import { B } from '../commons/fontSize';

export default class Button extends Component {
    render() {
        const { title, onPress, theme, style, disabled } = this.props
        const { bgc, color } = buttonThemes[theme]
        return (
            <ButtonWrapper style={style}>
                <StyledButton bgc={bgc} onPress={onPress} disabled={disabled}>
                    <StyledText color={color}>{title}</StyledText>
                </StyledButton>
            </ButtonWrapper>
        )
    }
}

const ButtonWrapper = styled.View`
    width: 85%;
`;

const StyledButton = styled.TouchableOpacity`
    height: 50px;
    background-color: ${props => props.bgc};
    border-radius: 8;
    align-items: center;
    justify-content: center;
    border: ${props => props.bgc === white ? `1px solid ${primary}` : `0px solid black`};
`;

const StyledText = styled(B)`
    color: ${props => props.color};
`;

const buttonThemes = {
    primary: {
        color: white,
        bgc: primary,
    },
    secondary: {
        color: primary,
        bgc: white,
    },
    available: {
        color: white,
        bgc: green,
    },
    unavailable: {
        color: white,
        bgc: red,
    },
    availableSoon: {
        color: white,
        bgc: yellow,
    }
}


Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.string
}

Button.defaultProps = {
    title: "Button",
    theme: "primary"
}