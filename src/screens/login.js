import React, { Component } from 'react';
import styled from 'styled-components/native';

import FullView from '../components/fullView';
import TextInput from '../components/textInput';
import Button from '../components/button';
import { primary } from '../commons/color';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        if (this.props.authenticated) {
            this.props.navigation.navigate("Register")
        }

        return (
            <StyledFullView>
                <TitleContainer>
                    <Title>Login</Title>
                </TitleContainer>
                <InternalView>
                    <TextInputContainer>
                        <TextInput title="Email" value={ this.state.email } onChangeText={ this.onChangeEmail } />
                        <TextInput title="Password" value={ this.state.password } onChangeText={ this.onChangePassword } />
                    </TextInputContainer>
                    <Button title='Login' onPress={ this.login } />
                </InternalView>

                <Title>{this.props.err}</Title>
                <OverrideButton title='Override to go to register' onPress={ () => this.props.navigation.navigate("Register") } />
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

const OverrideButton = styled(Button)`
    margin-top: 100px;
`