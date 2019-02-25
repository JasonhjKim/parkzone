import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components/native';

import FullView from '../components/fullView';
import TextInput from '../components/textInput';
import Button from '../components/button';
import { primary } from '../commons/color';
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
                <InternalView>
                    <TextInputContainer>
                        <TextInput title="Email" type='emailAddress' value={ this.state.email } onChangeText={ this.onChangeEmail } error={ error } />
                        <TextInput title="Password" type='password' value={ this.state.password } onChangeText={ this.onChangePassword } />
                    </TextInputContainer>
                    <Button title='Login' onPress={ this.login } />
                </InternalView>
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
    justify-content: flex-start;
`;

const TitleContainer = styled.View`
    width: 305px;
    height: 75px;
    margin: 30px 0;
    flex-direction: column;
    justify-content: center;
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
    height: 150px;
    justify-content: space-between;
`;