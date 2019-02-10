import React, { Component } from 'react';
import styled from 'styled-components/native';

import FullView from '../components/fullView';
import TextInput from '../components/textInput';
import Button from '../components/button';
import { primary } from '../commons/color';
export default class Login extends Component {
    render() {
        return (
            <StyledFullView>
                <TitleContainer>
                    <Title>Login</Title>
                </TitleContainer>
                <InternalView>
                    <TextInputContainer>
                        <TextInput title="Email" />
                        <TextInput title="Password" />
                    </TextInputContainer>
                    <Button title='Login' onPress={ () => this.props.navigation.navigate("Register") } />
                </InternalView>
            </StyledFullView>
        )
    }
}

const StyledFullView = styled(FullView)`
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const TitleContainer = styled.View`
    width: 305px;
    margin: 15px 0;
    flex-direction: column;
`;

const Title = styled.Text`
    font: 45px roboto;
    color: ${primary};
`;

const InternalView = styled.View`
    width: auto;
    height: 260px;
    flex-direction: column;
    justify-content: space-between;
`;


const TextInputContainer = styled.View`
    height: 140px;
    justify-content: space-between;
`;