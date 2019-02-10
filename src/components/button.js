import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { primary, white, green, red, yellow } from '../commons/color';

export default class Button extends Component {
    render() {
        const { title, onPress, theme } = this.props
        const { bgc, color } = buttonThemes[theme]
        return(
            <StyledButton bgc={ bgc } onPress={ onPress }> 
                <StyledText color={ color }>{ title }</StyledText>
            </StyledButton>
        )
    }
}

const StyledButton = styled.TouchableOpacity`
    width: 305px;
    height: 50px;
    background-color: ${props => props.bgc};
    border-radius: 8;
    align-items: center;
    justify-content: center;
`;

const StyledText = styled.Text`
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