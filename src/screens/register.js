import React, { Component } from 'react';
import styled from 'styled-components/native';
import FullView from '../components/fullView';
import StyledButton from '../components/button';
import TextInput from '../components/textInput';
import { primary } from '../commons/color';
import { AsyncStorage } from 'react-native';
import { T } from '../commons/fontSize';
import { H1 } from '../commons/fontSize';

export default class Register extends React.Component {
    state = {
        email: '',
        password: '',
        reenter: '',
    }

    validation = () => {
        const { email, password, reenter } = this.state
        if (email.indexOf('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/') === -1) {
            this.setState ({ error: "email is not valid" })
            console.log ("email sucks")
            return false;
        }
        if (password !==reenter) {
            this.setState ({ error: "passwords do not match"})
            console.log ("password sucks")
            return false;
        }
        return true
    }
    
    render() {       
        return (
            <StyledFullView>
                <TitleContainer>
                    <TitleText>Register</TitleText>
                </TitleContainer>
                <ChildContainer>
                    <TextContainer>
                        <TextInput 
                            title = "Email"
                            type = 'emailAddress'
                            value = { this.state.email } 
                            // value sent to the payload 
                            onChangeText = { this.onChangeEmail }
                            // something has been changed
                        />
                        <TextInput
                            title = "Password"
                            type = 'password'
                            value = { this.state.password }
                            onChangeText = { this.onChangePassword }
                        />
                        <TextInput 
                            title = "Re-enter Password"
                            type = 'reenter'
                            value = { this.state.reenter }
                            onChangeText = { this.onChangeReenter }
                        />
                    </TextContainer>
                    {this.state.error && <T>{this.state.error}</T>}
                    <RegisterButton
                        title = "Register" 
                        onPress = { this.handleSubmit }
                    />
                </ChildContainer>
            </StyledFullView>
        )
    }

        onChangeEmail = ( email ) => {
            this.setState ({ email })
        // onChange occurs when value of element has/will be changed
        // this.setState is an object that will eventually be merged into components current state
    }

        onChangePassword = ( password ) => {
            this.setState ({ password })
    }
        onChangeReenter = ( reenter ) => {
            this.setState ({ reenter })
    }

    handleSubmit = () => {
        if ( this.validation() === true ) {
            this.register()
        } 
        console.log (this.props)
    }

    register = () => {
        const payload = {
            email: this.state.email,
            password: this.state.password,
            // name: this.state.name,
        }
        this.props.signUpUser(payload)
    }
    // this is where everything combines together into a payload, if there is valid between password and reenter then it will finish the register
}

const StyledFullView = styled( FullView )`
    align-items: center;
    flex-direction: column;
`

const TitleContainer = styled.View`
    width: 85%;
`

const TitleText = styled( H1 )`
    font-weight: normal;
    margin: 6% 0;
    color: ${ primary };
`

const ChildContainer = styled.View`
    width:auto;
    height: 260px;
    flex-direction: column;
    justify-content: space-between;
`
const TextContainer = styled.View`
    width: 85%;
    justify-content: space-between;
`

const RegisterButton = styled( StyledButton )`
    margin: 12% 0;
`