import React, { Component } from 'react';
import styled from 'styled-components/native';

import FullView from '../components/fullView';
import TextBox from '../components/textBox';
import Button from '../components/button';
import { H1 } from '../commons/fontSize';
export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.authenticated && this.props.authenticated) {
            this.props.navigation.navigate("Register")
        }
    }

    render() {
        const { error } = this.props
        return (
            <StyledFullView>
                <TitleContainer>
                    <Title>Login</Title>
                </TitleContainer>
                <TextBoxContainer>
                    <StyledTextInput title="Email" type='emailAddress' value={this.state.email} onChangeText={this.onChangeEmail} error={error} />
                    <StyledTextInput title="Password" type='password' value={this.state.password} onChangeText={this.onChangePassword} />
                </TextBoxContainer>
                <LoginButton title='Login' onPress={this.login} />
            </StyledFullView>
        )
    }

    onChangeEmail = (email) => {
        this.setState({ email })
    }

    onChangePassword = (password) => {
        this.setState({ password })
    }

    login = () => {
        const payload = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(payload)
    }
}

const StyledFullView = styled(FullView)`
    flex-direction: column;
    align-items: center;
`;

const TitleContainer = styled.View`
    width: 85%;
`;

const Title = styled(H1)`
    font-weight: normal;
    margin: 6% 0;
`;

const TextBoxContainer = styled.View`
    width: 85%;
    justify-content: space-between;
`;

const StyledTextInput = styled(TextBox)`
    margin: 2% 0;
`;

const LoginButton = styled(Button)`
    margin: 12% 0;
`;